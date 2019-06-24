const { BN } = require('bn.js');

module.exports = {
  MAX_UINT256: new BN('2').pow(new BN('256')).sub(new BN('1')),
  REVERT: 'revert',
  ADD: 'MATH__ADD_IMPL',
  SUB: 'MATH__SUB_IMPL',
  MUL: 'MATH__MUL_IMPL',
  DIV: 'MATH__DIV_IMPL',
  MOD: 'MATH__MOD_IMPL',
}
