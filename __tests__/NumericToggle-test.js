// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import {shallow} from 'enzyme';
import NumericToggle from '../modules/NumericToggle';

it('NumericToggle check if the buttons are set up correctly with the data provided', () => {
  // Render a NumericToggle component in the document
  const buttons = [43,19,-11,-24];
  /*const numericToggle = TestUtils.renderIntoDocument(
    <NumericToggle values={buttons} />
  );*/

  const numericToggle = shallow(
    <NumericToggle values={buttons} />
  );


 expect(numericToggle.text()).toEqual('4319-11-24');
 expect(numericToggle.find('button').length).toEqual(4);

  /*checkbox.find('button').simulate('change');

  expect(checkbox.text()).toEqual('On');*/
});