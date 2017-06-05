import xml2js from 'xml2js';
import ejs from 'ejs';

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

export default {
	parseXML
}
