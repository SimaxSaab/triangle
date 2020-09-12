function defineIsoscelesTriangle(aN, bN, cN) {
  if (aN == bN && aN != cN || aN == cN && aN !=bN || bN == cN && bN != aN) {
    return true;
  }
  return false;
}

module.exports = {defineIsoscelesTriangle};