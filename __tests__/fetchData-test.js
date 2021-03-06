// Copyright 2004-present Facebook. All Rights Reserved.

jest.mock('jquery');

beforeEach(() => jest.resetModules());

it('calls into $.ajax with the correct params', () => {
  const $ = require('jquery');
  const fetchData = require('../modules/fetchData');

  // Call into the function we want to test
  const dummyCallback = () => {};
  fetchData(dummyCallback);

  // Now make sure that $.ajax was properly called during the previous
  // 2 lines
  expect($.ajax).toBeCalledWith({
    success: jasmine.any(Function),
    type: 'GET',
    url: 'http://frontend-exercise.apps.staging.digital.gov.au/bars',
  });
});

it('calls the callback when $.ajax requests are finished', () => {
  const $ = require('jquery');
  const fetchData = require('../modules/fetchData');

  // Create a mock function for our callback
  const callback = jest.fn();
  fetchData(callback);

  // Now we emulate the process by which `$.ajax` would execute its own
  // callback
  $.ajax.mock.calls[0/*first call*/][0/*first argument*/].success(
    {"buttons":[38,30,-35,-49],"bars":[43,84,85],"limit":100}
  );

  // And finally we assert that this emulated call by `$.ajax` incurred a
  // call back into the mock function we provided as a callback
  expect(callback.mock.calls[0/*first call*/][0/*first arg*/]).toEqual(
    {"buttons":[38,30,-35,-49],"bars":[43,84,85],"limit":100}
  );
});
