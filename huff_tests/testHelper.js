const testImpl = `
#include "math.huff"

#define macro THROW = takes(0) returns(0) {
  0x00 0x00 revert
}

#define macro MATH__ADD_IMPL = takes(2) returns(1) {
  MATH__ADD<throw_error>()
  stop
  throw_error:
    THROW()
}

#define macro MATH__SUB_IMPL = takes(2) returns(1) {
  MATH__SUB<throw_error>()
  stop
  throw_error:
    THROW()
}

#define macro MATH__MUL_IMPL = takes(2) returns(1) {
  MATH__MUL<throw_error>()
  stop
  throw_error:
    THROW()
}
`;

module.exports = testImpl;

