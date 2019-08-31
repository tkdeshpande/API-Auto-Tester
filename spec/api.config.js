const { API } = require('../util/types.js');

const apis = [
  new API({
    name: 'Get Google Information',
    tests: 'getAPI.spec.js',
  }),
  // {
  //   name: 'Post Google Information',
  //   tests: 'postAPI.spec.js',
  // },

];
module.exports = {
  apis,
};
