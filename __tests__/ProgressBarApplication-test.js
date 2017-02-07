// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ProgressBarApplication from '../modules/ProgressBarApplication';
import NumericToggle from '../modules/NumericToggle';
import ProgressBar from '../modules/ProgressBar';

 it('should mount in a full DOM', function() {
    expect(mount(<ProgressBarApplication />).find('.progress-bar-application').length).toBe(1);
  });



/*it('ProgressBarApplication test', () => {
  
    const data = {"buttons":[39,8,-25,-37],"bars":[34,89,73,25]};
    const wrapper = mount(<ProgressBarApplication data={data} />);

    expect(wrapper.find(NumericToggle).length).toEqual(1);
    expect(wrapper.find(ProgressBar).length).toEqual(1);

  
});*/
