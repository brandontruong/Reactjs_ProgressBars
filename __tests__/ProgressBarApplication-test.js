// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ProgressBarApplication from '../modules/ProgressBarApplication';

 it('should mount in a full DOM', function() {
    expect(mount(<ProgressBarApplication />).find('.progress-bar-application').length).toBe(1);
  });



it('ProgressBarApplication test', () => {
  
const data = {"buttons":[39,8,-25,-37],"bars":[34,89,73]};
    const wrapper = mount(<ProgressBarApplication data={data} />);

wrapper.find('select').simulate('change',{target: { value : '1'}});
expect(wrapper.find('select').props().value).toBe("1");

    /*wrapper.find('select').simulate('change',{target: { value : '100'}});
    expect(wrapper.find('select')).toEqual('1');*/
  
});
