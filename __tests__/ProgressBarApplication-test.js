require('sinon-as-promised');
import {expect} from 'chai';
import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import ProgressBarApplication from '../modules/ProgressBarApplication';

describe('ProgressBarApplication test', function() {
	it('should mount in a full DOM', function() {
		expect(mount(<ProgressBarApplication />).find('.progress-bar-application').length).to.equal(1);
	});
	it('componentWillReceiveProps called', async () => {
		const data = {"buttons":[23,25,-8,-26],"bars":[81,82,35,46]};
		const progressBarApplication = mount(<ProgressBarApplication data={data} />);
		//expect(progressBarApplication.state('bars')).to.equal(data.bars);
		//expect(progressBarApplication.state('buttons')).to.equal(data.buttons);
	});
});
