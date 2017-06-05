'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _wechatCrypto = require('wechat-crypto');

var _wechatCrypto2 = _interopRequireDefault(_wechatCrypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkSignature(signature, timestamp, nonce, token) {
  var arr = [token, timestamp, nonce].sort();
  var shasum = _crypto2.default.createHash("sha1");
  shasum.update(arr.join(''));
  if (signature === shasum.digest("hex")) return true;
  return false;
}

function checkSignatureCrypt(signature, timestamp, nonce, token, encodingAESKey, appid, echostr) {
  var cryptor = new _wechatCrypto2.default(token, encodingAESKey, appid);
  if (signature === cryptor.getSignature(timestamp, nonce, echostr)) {
    return true;
  }
  return false;
}

exports.default = {
  checkSignature: checkSignature,
  checkSignatureCrypt: checkSignatureCrypt
};