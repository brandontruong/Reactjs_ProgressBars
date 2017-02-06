// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import ProgressBar from '../modules/ProgressBar';

it('ProgressBar check if the incrementedBy is greater than the limit the the bar should have overlimit class', () => {
  const incrementedBy = 95;
  const limit = 100;
  const progressBar = shallow(
    <ProgressBar incrementedBy={incrementedBy} limit={limit} />
  );
 expect(progressBar.hasClass('overlimit')).toEqual(false);
 
});

it('ProgressBar check if the incrementedBy is less than the limit the the bar should not have overlimit class', () => {
  const incrementedBy = 115;
  const limit = 100;
  const progressBar = shallow(
    <ProgressBar incrementedBy={incrementedBy} limit={limit} />
  );
 expect(progressBar.hasClass('overlimit')).toEqual(true);
 
});

/*it('ProgressBar check if the incrementedBy is less than 0 then the value of the bar should always be 0', () => {
  const incrementedBy = -50;
  const limit = 100;
  const progressBar = shallow(
    <ProgressBar incrementedBy={incrementedBy} limit={limit} />
  );
 expect(progressBar.text()).toEqual('0');
 
});*/

 it('should mount in a full DOM', function() {
    expect(mount(<ProgressBar />).find('.progress-bar').length).toBe(1);
  });

  it('calls componentWillReceiveProps', () => {
    sinon.spy(ProgressBar.prototype, 'componentWillReceiveProps');
    const wrapper = mount(<ProgressBar />);
    expect(ProgressBar.prototype.componentWillReceiveProps.calledOnce).toEqual(false);
  });
  
 /*it('find Foo', function() {
	      const row = shallow(<ProgressBar />)
  const columns = row.find(Foo);
  expect(columns).to.have.length.of(1);
    
  });*/
  
  it('calls componentWillMount', () => {
    sinon.spy(ProgressBar.prototype, 'componentWillMount');
    const wrapper = mount(<ProgressBar />);
    expect(ProgressBar.prototype.componentWillMount.calledOnce).toEqual(true);
  });

   it('renders without exploding', () => {
	     
    expect(
		shallow(
		<ProgressBar />
		).length
	).toEqual(1);
  });

/*  it('renders test', () => {
	     const wrapper = shallow(<ProgressBar />);
		 
    expect(
		wrapper.find('Foo').length
	).toEqual(1);
  });
  
  it('renders prop', () => {
	     const wrapper = shallow(<ProgressBar />);
		 
    expect(
		wrapper.find('Foo').prop('test')
	).toEqual('hello world');
  });*/