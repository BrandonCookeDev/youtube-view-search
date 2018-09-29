'use strict';

const DEFAULT_PAGE_COUNT = 5;
const DEFAULT_RESULT_COUNT = 5;

let _ = require('lodash');
let Youtube = require('./youtube');
let Video = require('./video');
let Category = require('./youtubeCategories');

class Aggregator{

	static async aggregate(options){
		// parse options
		let searchArgs = options.searchArgs || [];
		let resultCount = options.resultCount;
		let pageCount = options.pageCount;
		let channel = options.channel;
		let filters = options.filters;
		let strict = options.strict;

		let searchWithoutChannel = searchArgs.filter(arg => { return arg != channel; });

		let searchResults = [];
		let iterations = pageCount || DEFAULT_PAGE_COUNT;
		let searchData = await Youtube.search(searchArgs, resultCount || DEFAULT_RESULT_COUNT);
		searchResults.push(searchData);

		for(var i = 0; i < iterations; i++){
			//console.log(chalk.green('Search Results:\n%s', JSON.stringify(data, null, 4)));
			searchData = await Youtube.searchNextPage(searchArgs, resultCount || DEFAULT_RESULT_COUNT, searchData.nextPageToken);
			searchResults.push(searchData);
		}

		let videoIds = searchResults.map(resultSet => { return resultSet.items.map(item => { return item.id.videoId; }) ; });
		videoIds = _.flatten(videoIds);
		let videoPromises = videoIds.map(id => { return Youtube.get(id); });
		let videos = await Promise.all(videoPromises);

		let videoObjects = videos.map(raw => { 
			try { 
				return Video.createVideo(raw);
			} catch(e){ 
				return null; 
			}
		});
		videoObjects = videoObjects.filter(e => { return e != null; });
		videoObjects = videoObjects.filter(e => { return e.categoryId == Category['Gaming']; });
		if(channel) videoObjects = videoObjects.filter(e => { return new RegExp(e.channel, 'i').test(channel); });
		if(strict) videoObjects = videoObjects.filter(e => { 
			for(var i in searchWithoutChannel){
				let arg = searchWithoutChannel[i];
				let regex = new RegExp(arg, 'i');
				if(!regex.test(e.title))
					return false;
			}
			return true;
		});
		videoObjects = videoObjects.filter(e => { 
			for(var i in filters){
				let filter = filters[i];
				let regex = new RegExp(filter, 'i');
				if(regex.test(e.title)) return false;
			}
			return true;
		});
		let sorted = videoObjects.sort(function(a, b){
			return b.views - a.views;
		});
		return sorted;

		/*
		sorted.forEach(video => console.log(video.colorize()));

		let totalViews = 0;
		sorted.forEach(e => { totalViews += parseInt(e.views); });
		console.log(format(
				'==============================\n'+
				'Total views counted: %s\n'+
				'==============================', 
				chalk.green(totalViews) 
			)
		)
		*/
	}

}

module.exports = Aggregator;