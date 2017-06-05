'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

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

exports.default = {
  parseXML: parseXML
};