// Copyright 2004-present Facebook. All Rights Reserved.

const $ = require('jquery');

function parseJSON(response) {
  return {
    bars: response.bars,
    buttons: response.buttons,
    //limit: response.limit,
	limit: 100
  };
}

function fetchData(callback) {
  return $.ajax({
    success: response => callback(parseJSON(response)),
    type: 'GET',
    url: 'http://frontend-exercise.apps.staging.digital.gov.au/bars',
  });
}

module.exports = fetchData;
