// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
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

});

 /*it('sets up buttons and binds events correctly given props', () => {
    const buttons = [43, 19, -11, -24];
    const onChange = jasmine.createSpy();
    const numericToggle = shallow(
      <NumericToggle values={buttons} onChange={onChange} />
    );

    expect(numericToggle.text()).toEqual('4319-11-24');
    expect(numericToggle.find('button').length).toEqual(4);
    numericToggle.find('button').nodes[0].props.onClick();
    expect(onChange).toHaveBeenCalled();
  });*/

it('simulates click events', () => {
    const buttons = [43,19,-11,-24];
    const onChange = sinon.spy();
    const numericToggle = shallow(
      <NumericToggle onChange={onChange} values={buttons} />
    );

    numericToggle.find('button').nodes[0].props.onClick();
    expect(numericToggle.find('button').length).toEqual(4);
     
      
    expect(onChange.calledOnce).toEqual(true);
    
  });

