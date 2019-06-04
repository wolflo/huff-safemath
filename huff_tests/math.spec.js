const chai = require('chai');
const path = require('path');
const BN = require('bn.js');

const { Runtime } = require('../huff');

const { expect } = chai;
const pathToTestData = path.posix.resolve(__dirname, '../huff_modules');

const testHelper = `
#include "math.huff"
#define macro MATH__ADD_IMPL = takes(2) returns(1) {
  MATH__ADD<throw_error>()
  stop
  throw_error:
    0x00 0x00 revert
}
`;

describe('MATH__ADD', () => {
  let math;
  before(async () => {
    math = new Runtime(testHelper, pathToTestData, true);
  });

  it('adds two numbers', async () => {
    const calldata = [];
    const initialMem = [];
    const initialStack = [3, 4];
    const callvalue = 0;

    const {
      stack,
      mem,
      gas,
      bytecode,
      returndata,
    } = await math('MATH__ADD_IMPL', initialStack, initialMem, calldata, callvalue);

    console.log('stack: ', stack);
    console.log('mem: ', mem);
    console.log('gas: ', gas);
    console.log('bytecode: ', bytecode);
    console.log('returndata: ', returndata);
  });
});
