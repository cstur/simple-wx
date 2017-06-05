import crypto from 'crypto';
import WXBizMsgCrypt from 'wechat-crypto';

function checkSignature(signature, timestamp, nonce, token){
  let arr = [token, timestamp, nonce].sort();
  let shasum = crypto.createHash("sha1");
  shasum.update(arr.join(''));
  if (signature===shasum.digest("hex")) return true;
  return false;
}

function checkSignatureCrypt(signature, timestamp, nonce, token, encodingAESKey, appid, echostr){
  let cryptor = new WXBizMsgCrypt(token, encodingAESKey, appid);
  if (signature === cryptor.getSignature(timestamp, nonce, echostr)) {
  	return true;
  }
  return false;
}

export default {
	checkSignature,
	checkSignatureCrypt
}
