import { expect } from 'chai';
import { parseXML } from '../index.js';

describe('Msg Test', () => {

	it('parseXML', async () => {
		var xml = `<xml><root>simple wx</root></xml>`
		let result = await parseXML(xml);
		expect(result.root).to.equal('simple wx');
	});

});
