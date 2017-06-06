import xml2js from 'xml2js';
import xml from 'xml';

function parseXML (xml) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, {trim: true, explicitArray: false}, function (err, obj) {
      if (err) {
        return reject(err);
      }
      resolve(obj.xml);
    });
  });
}

function replyText(ToUserName, FromUserName, Content){
	return xml({
		xml:[
			{ToUserName:ToUserName},
			{FromUserName:FromUserName},
			{CreateTime:new Date().getTime()},
			{MsgType:'text'},
			{Content:Content}
		]
	});
}

export default {
	parseXML,
	replyText
}
