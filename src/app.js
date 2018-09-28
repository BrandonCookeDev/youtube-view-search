'use strict';
require('dotenv').config();
Promise = require('bluebird');

let _ = require('lodash');
let chalk = require('chalk');
let program = require('commander');
let Youtube = require('./youtube');
let Video = require('./video');

const DEFAULT_PAGE_COUNT = 5;
const DEFAULT_RESULT_COUNT = 5;

var collect = function(val, arr){
	arr.push(val);
	return arr;
}

program
	.version('1.0')
	.option('-s, --searchArgs [search values]', 'Terms to search for', collect, [])
	.option('-p, --pageCount [number]', 'The number of pages of results to traverse')
	.option('-r, --resultCount [number]', 'The number of results per page to gather')
	.parse(process.argv);

(async function(){
	try{
		Youtube.init();

		let searchResults = [];
		let iterations = program.pageCount || DEFAULT_PAGE_COUNT;
		let searchData = await Youtube.search(program.searchArgs, program.resultCount || DEFAULT_RESULT_COUNT);
		searchResults.push(searchData);

		for(var i = 0; i < iterations; i++){
			//console.log(chalk.green('Search Results:\n%s', JSON.stringify(data, null, 4)));
			searchData = await Youtube.searchNextPage(program.searchArgs, program.resultCount || DEFAULT_RESULT_COUNT, searchData.nextPageToken);
			searchResults.push(searchData);
		}

		let videoIds = searchResults.map(resultSet => { return resultSet.items.map(item => { return item.id.videoId; }) ; });
		videoIds = _.flatten(videoIds);
		let videoPromises = videoIds.map(id => { return Youtube.get(id); })
		let videos = await Promise.all(videoPromises);

		let videoObjects = videos.map(video => { try { return new Video(video.items[0].snippet.title, video.items[0].statistics.viewCount); } catch(e){ return null; }});
		videoObjects = videoObjects.filter(e => { return e != null; })
		let sorted = videoObjects.sort(function(a, b){
			return b.views - a.views;
		})
		sorted.forEach(video => console.log(video.toString()));
		return process.exit(0);
	} catch(e){
		console.error(e);
		return process.exit(1);
	}
})()