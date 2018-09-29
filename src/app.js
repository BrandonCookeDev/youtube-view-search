'use strict';
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});
Promise = require('bluebird');

let chalk = require('chalk');
let {format} = require('util');
let program = require('commander');
let Youtube = require('./lib/youtube');
let Aggregator = require('./lib/aggregator');

function collectSearchArgs(val, arr){
	arr.push(val);
	return arr;
}

function collectFilterArgs(val, arr){
	arr.push(val);
	return arr;
}

program
	.version('1.0')
	.option('-c, --channel [channel name]', 'Channel to get videos from')
	.option('-s, --searchArgs [search values]', 'Terms to search for', collectSearchArgs, [])
	.option('-p, --pageCount [number]', 'The number of pages of results to traverse')
	.option('-r, --resultCount [number]', 'The number of results per page to gather')
	.option('-f, --filters [filter values]', 'Terms to filter out of the search results', collectFilterArgs, [])
	.parse(process.argv);
if(program.channel) program.searchArgs.push(program.channel);

(async function(){
	try{
		Youtube.init();

		let options = {
			channel: program.channel,
			searchArgs: program.searchArgs,
			filters: program.filters,
			resultCount: program.resultCount,
			pageCount: program.pageCount
		};
		let sorted = await Aggregator.aggregate(options);
		sorted.forEach(video => console.log(video.colorize()));

		let totalViews = 0;
		sorted.forEach(e => { totalViews += parseInt(e.views); });
		console.log(format(
			'==============================\n'+
			'Total views counted: %s\n'+
			'==============================', 
			chalk.green(totalViews) 
		));

		return process.exit(0);
	} catch(e){
		console.error(e);
		return process.exit(1);
	}
})();