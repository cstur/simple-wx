'use strict';
require('babel-polyfill');

const checkSignature = require('./lib/checksignature').default;

module.exports = {
	checkSignature : checkSignature.checkSignature,
	checkSignatureCrypt : checkSignature.checkSignatureCrypt
}