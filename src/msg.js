import xml2js from 'xml2js';
import ejs from 'ejs';

function parseXML (xml) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, {trim: true}, function (err, obj) {
      if (err) {
        return reject(err);
      }
      resolve(obj);
    });
  });
}

export default {
	parseXML
}
