'use strict';

Promise = require('bluebird');
let YT = require('youtube-node');
let yt = Promise.promisifyAll(new YT());

class Youtube{

	static init(){
		yt.setKey(process.env.youtubeKey);
		Youtube.initialized = true;
	}

	static async search(keywords, resultCount, pageToken){
		return pageToken ? 
			await yt.searchAsync(keywords.join(' '), resultCount, {pageToken: pageToken}) : 
			await yt.searchAsync(keywords.join(' '), resultCount);
	}

	static async searchNextPage(keywords, resultCount, pageToken){
		return await Youtube.search(keywords, resultCount, pageToken);
	}

	static async searchPreviousPage(keywords, resultCount, pageToken){
		return await Youtube.search(keywords, resultCount, pageToken);
	}

	static async get(videoId){
		return await yt.getByIdAsync(videoId);
	}
}

module.exports = Youtube