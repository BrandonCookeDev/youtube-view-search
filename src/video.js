'use strict';

class Video{
	constructor(title, views){
		this.title = title;
		this.views = views;
	}
}

Video.prototype.toString = function(){
	return `Title: ${this.title}\nViews: ${this.views}\n------------------`
}

module.exports = Video;