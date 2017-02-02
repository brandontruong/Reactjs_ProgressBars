// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import {shallow} from 'enzyme';
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

it('ProgressBar check if the incrementedBy is less than 0 then the value of the bar should always be 0', () => {
  const incrementedBy = -50;
  const limit = 100;
  const progressBar = shallow(
    <ProgressBar incrementedBy={incrementedBy} limit={limit} />
  );
 expect(progressBar.text()).toEqual('0');
 
});