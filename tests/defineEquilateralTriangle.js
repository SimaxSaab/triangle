function defineEquilateralTriangle(aN, bN, cN) {  // return false if equilateral
  return !(aN == bN && aN == cN && bN == cN && true);
}

module.exports = {defineEquilateralTriangle};