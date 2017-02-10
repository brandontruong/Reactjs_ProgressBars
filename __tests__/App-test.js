require('sinon-as-promised');
import {expect} from 'chai';
import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';
import App, {fetchData, BASE_URL} from '../modules/App.js';

describe('App test', function() {
	it('calls fetchData on component mount', () => {
		const fetchData = sinon.stub().resolves();
		const app = mount(<App fetchData={fetchData} />);
		expect(fetchData.callCount).to.equal(1);
	});
	it('sets component state to returned data', async () => {
		const data = {"buttons":[23,25,-8,-26],"bars":[81,82,35,46]};
		const fetchData = sinon.stub().resolves({data: data});
		const app = await mount(<App fetchData={fetchData} />);
		expect(app.state('loaded')).to.equal(true);
		expect(app.state('bars')).to.equal(data.bars);
		expect(app.state('buttons')).to.equal(data.buttons);
	});
	it('calls the posts endpoint', () => {
		sinon.stub(axios, 'get');
		fetchData();
		expect(axios.get.firstCall.args[0]).to.equal(`${BASE_URL}`);
		axios.get.restore();
	});
});