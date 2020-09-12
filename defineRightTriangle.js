function defineRightTriangle(aN, bN, cN, e = 0) {
  return (Math.abs(aN * aN + bN * bN - cN * cN) <= e || Math.abs(aN * aN + cN * cN - bN * bN) <= e || Math.abs(bN * bN + cN * cN - aN * aN) <= e) ? true : false;
}

module.exports = {defineRightTriangle};