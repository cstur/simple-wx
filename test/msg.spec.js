import { expect } from 'chai';
import { parseXML, replyText } from '../index.js';

describe('Msg Test', () => {

	it('parseXML', async () => {
		var xml = `<xml><root>simple wx</root></xml>`
		let result = await parseXML(xml);
		expect(result.root).to.equal('simple wx');
	});

	it('replyText', async () => {
		expect(replyText('to','from','abc'))
		.to
		.equal('<xml><ToUserName>to</ToUserName><FromUserName>from</FromUserName><CreateTime>1496712654546</CreateTime><MsgType>text</MsgType><Content>abc</Content></xml>');
	});

});
