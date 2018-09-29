'use strict';
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')});
Promise = require('bluebird');
let Youtube = require('../lib/youtube');
Youtube.init();

let express = require('express');
let app = express();
app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded());
app.use(require('cors')());

require('./api')(app);

app.listen('8080', function(err){
	if(err)
		console.error(err);
	else console.log('Server running on port 8080');
});
