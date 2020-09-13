function defineCorrectnessTriangle(aN, bN, cN) {
  return (aN + bN > cN && aN + cN > bN && bN + cN > aN) ? true : false;
}

module.exports = {defineCorrectnessTriangle};