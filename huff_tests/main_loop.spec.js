const chai = require('chai');
const bn = require('bn.js');
const path = require('path');

const { Runtime } = require('../huff');

const { expect } = chai;

const pathToTestData = path.posix.resolve(__dirname, '../huff_modules');

describe('tests', function describe() {
  let main;
  before(async () => {
    main = new Runtime('main_loop.huff', pathToTestData, true);
  });

  it('adds two numbers', async () => {
    const calldata = [
      // { index: 0, value: new bn(1) },
      // { index: 32, value: new bn(2) },
    ];
    const initialMem = [];
    const initialStack = [3, 4];
    const callvalue = 0;

    const {
      stack,
      mem,
      gas,
      bytecode,
      returndata,
    } = await main('MAIN__SAFEMATH', initialStack, initialMem, calldata, callvalue)

    console.log('stack: ', stack);
    console.log('mem: ', mem);
    console.log('gas: ', gas);
    console.log('bytecode: ', bytecode);
    console.log('returndata: ', returndata);
  });

});
