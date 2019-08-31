const tests = [
  {
    id: 'T01',
    name: 'Checking Google HomePage',
    url: 'http://google.com',
    method: 'POST',
    expectedResponseCode: 200,
  },
  {
    id: 'T02',
    name: 'Checking Google Home Page with incorrect response code',
    url: 'http://google.com',
    method: 'POST',
    expectedResponseCode: 400,
  },
];

module.exports = {
  tests,
};
