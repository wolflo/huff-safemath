const chai = require('chai');
const path = require('path');
const BN = require('bn.js');

const { Runtime } = require('../huff');

const { expect } = chai;
const pathToTestData = path.posix.resolve(__dirname, '../huff_modules');

describe('MAIN__SAFEMATH', () => {
  let main;
  before(async () => {
    main = new Runtime('main_loop.huff', pathToTestData, true);
  });

  it('exists', () => {});
});
