'use strict';

let chalk = require('chalk');
let {format} = require('util');

const toString = 'Title: %s\nChannel: %s\nViews: %s\nURL: %s\n------------------';
const YOUTUBE_URL = 'https://www.youtube.com/watch?v=%s';

class Video{
	constructor(id, title, channel, views, categoryId){
		this.id = id;
		this.title = title;
		this.channel = channel;
		this.views = views;
		this.url = format(YOUTUBE_URL, this.id);
		this.categoryId = categoryId;
	}

	static createVideo(data){
		let raw = data.items[0];
		return new Video(
			raw.id,
			raw.snippet.title, 
			raw.snippet.channelTitle,
			raw.statistics.viewCount,
			raw.snippet.categoryId
		);
	}
	
	colorize(){
		return format(toString, chalk.magenta(this.title), chalk.blue(this.channel), chalk.green(this.views), chalk.gray(this.url));
	}
}

Video.prototype.toString = function(){
	return format(toString, this.title, this.channel, this.views, this.url);
};

module.exports = Video;