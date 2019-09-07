/* eslint-disable func-names */
const Test = function ({
  id = 'Unknown',
  name = 'Unknown',
  url,
  method,
  expectedResponseCode,
  expectedSchema,
  options,
}) {
  return {
    id,
    name,
    url,
    method,
    expectedResponseCode,
    expectedSchema,
    options,
  };
};

const API = function ({
  id = 'Unknown',
  name = 'Unknown',
  tests,
  defaults,
}) {
  return {
    id,
    name,
    tests,
    defaults,
  };
};


module.exports = {
  Test, API,
};
