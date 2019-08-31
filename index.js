/* eslint-disable no-new-func */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const chakram = require('chakram');

const { expect } = chakram;
const { apis } = require('./spec/api.config');

let tests = [];

describe('Suite', function () {
  apis.forEach((api) => {
    describe(`${api.id}: ${api.name}`, function () {
      ({ tests } = require(`./spec/${api.tests}`));
      tests.forEach((test) => {
        describe(`${test.id}: ${test.name}`, function () {
          let response;
          it(`should provide HTTP response code: ${test.expectedResponseCode}`, async function () {
            // eslint-disable-next-line no-eval
            const request = eval(`chakram.${test.method.toLowerCase()};`);
            if (test.method.toLowerCase() !== 'get') {
              response = await request(test.url, test.options.formdata, test.options);
            } else {
              response = await request(test.url, test.options);
            }
            expect(response).to.have.status(test.expectedResponseCode);
          });
          it('should have valid schema', function () {
            expect(response).to.have.schema(test.expectedSchema);
          });
        });
      });
    });
  });
});
