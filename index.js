'use strict';
require('babel-polyfill');

const checkSignature = require('./src/checksignature').default;

module.exports = {
	checkSignature : checkSignature.checkSignature,
	checkSignatureCrypt : checkSignature.checkSignatureCrypt
}