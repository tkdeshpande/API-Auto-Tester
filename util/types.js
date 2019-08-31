/* eslint-disable func-names */
const Test = function ({
  id = 'Unknown',
  name = 'Unknown',
  url,
  method,
  expectedResponseCode,
  expectedSchema,
}) {
  return {
    id,
    name,
    url,
    method,
    expectedResponseCode,
    expectedSchema,
  };
};

const API = function ({
  id = 'Unknown',
  name = 'Unknown',
  tests,
}) {
  return {
    id,
    name,
    tests,
  };
};


module.exports = {
  Test, API,
};
