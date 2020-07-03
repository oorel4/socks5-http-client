/**
 * @overview
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license MIT
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 * @preserve
 */

'use strict';

/*jshint node:true*/

var http = require('http');
var inherits = require('util').inherits;
var socksClient = require('socks5-client');

function createConnection(options) {
	var socksSocket = socksClient.createConnection(options);
	if (this.timeout) socksSocket.setTimeout(this.timeout);
	return socksSocket;
}

function Agent(options) {
	http.Agent.call(this, options);
	this.timeout = options.timeout;
	this.createConnection = createConnection;
}

inherits(Agent, http.Agent);

module.exports = Agent;
