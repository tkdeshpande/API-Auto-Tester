const { Test } = require('../util/types.js');


const tests = [
  new Test({
    id: 'T01',
    name: 'Checking Google HomePage',
    expectedResponseCode: 200,
    expectedSchema: {},
    url: 'http://google.com',
    method: 'GET',
  }),
  new Test({
    id: 'T02',
    name: 'Checking Google Home Page with incorrect response code',
    url: 'http://google.com',
    method: 'GET',
    expectedResponseCode: 400,
    expectedSchema: {},
  }),
];

module.exports = {
  tests,
};
