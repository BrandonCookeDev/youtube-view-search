'use strict';

let chalk = require('chalk');
let {format} = require('util');
let express = require('express');
let router = express.Router();
let Aggregator = require('../lib/aggregator');

module.exports = function(server){
	router.post('/yt', function(req, res){
		req.body.searchArgs = 
			Array.isArray(req.body.searchArgs) ? req.body.searchArgs : req.body.searchArgs.split(',');
		Aggregator.aggregate(req.body)
			.then(data => {
				let toStrings = data.map(video => video.toString());

				let totalViews = 0;
				data.forEach(e => { totalViews += parseInt(e.views); });
				let totalString = format(
					'==============================\n'+
					'Total views counted: %s\n'+
					'==============================', 
					chalk.green(totalViews) 
				);
				
				let ret = toStrings.join('\n') + '\n' + totalString;
				res.send(ret).status(200);
			})
			.catch(e => {
				res.send(e.message).status(500);
				console.error(e);
			});
	});

	server.use('/api', router);
};