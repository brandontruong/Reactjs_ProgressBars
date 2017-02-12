require('sinon-as-promised');
import {expect} from 'chai';
import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import ProgressBarApplication from '../modules/ProgressBarApplication';

describe('ProgressBarApplication test', function() {
	it('should mount in a full DOM', function() {
		expect(mount(<ProgressBarApplication />).find('.progress-bar-application').length).to.equal(1);
	});
  it('componentWillReceiveProps called', () => {
    const data = {"buttons":[23,25,-8,-26],"bars":[81,82,35,46]};
    const spy = sinon.spy(ProgressBarApplication.prototype, 'componentWillReceiveProps');
    const progressBarApplication = mount(<ProgressBarApplication />);
    expect(spy.calledOnce).to.equal(false);
    progressBarApplication.setProps({ data: data });
    expect(spy.calledOnce).to.equal(true);
    expect(progressBarApplication.state('bars')).to.equal(data.bars);
  });
  it('handleBarChange get called and set the state property correctly', () => {
    const spy = sinon.spy(ProgressBarApplication.prototype, 'handleBarChange');
    const progressBarApplication = mount(<ProgressBarApplication />);
    const selectWrapper = progressBarApplication.find('select');
    expect(selectWrapper.length).to.equal(1);
    
    selectWrapper.simulate('change', {target: {value: '1'}});
    expect(spy.calledOnce).to.equal(true);
    expect(progressBarApplication.state('selectedBar')).to.equal('1');
  });
  it('handleChange get called and set the state property correctly', () => {
    const spy = sinon.spy(ProgressBarApplication.prototype, 'handleChange');
	const data = {"buttons":[23,25,-8,-26],"bars":[81,82,35,46]};
    const progressBarApplication = mount(<ProgressBarApplication handleChange={spy}/>);
	expect(spy.calledOnce).to.equal(false);
	progressBarApplication.setProps({ data: data });
    const buttontWrapper = progressBarApplication.find('button');
    expect(buttontWrapper.length).to.equal(4);
    buttontWrapper.at(0).simulate('click');
    expect(spy.calledOnce).to.equal(true);
	expect(progressBarApplication.state('bars')).to.deep.equal([23,0,0,0]);
  });
});
