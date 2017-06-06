'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var _xml = require('xml');

var _xml2 = _interopRequireDefault(_xml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseXML(xml) {
	return new Promise(function (resolve, reject) {
		_xml2js2.default.parseString(xml, { trim: true, explicitArray: false }, function (err, obj) {
			if (err) {
				return reject(err);
			}
			resolve(obj.xml);
		});
	});
}

function replyText(ToUserName, FromUserName, Content) {
	return (0, _xml2.default)({
		xml: [{ ToUserName: { _cdata: ToUserName } }, { FromUserName: { _cdata: FromUserName } }, { CreateTime: new Date().getTime() }, { MsgType: { _cdata: 'text' } }, { Content: { _cdata: Content } }]
	});
}

exports.default = {
	parseXML: parseXML,
	replyText: replyText
};