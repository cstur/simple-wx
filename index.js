'use strict';
require('babel-polyfill');

const checkSignature = require('./lib/checksignature').default;
const msg = require('./lib/msg').default;

module.exports = {
	checkSignature : checkSignature.checkSignature,
	checkSignatureCrypt : checkSignature.checkSignatureCrypt,
	parseXML: msg.parseXML
}