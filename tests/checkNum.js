function checkNum(aN, bN, cN) {
  let f1, f2, f3, wA = wB = wC = '', w1 = w2 = w3 = '1', e = 1e-5;
  aN = parseFloat(aN);
  bN = parseFloat(bN);
  cN = parseFloat(cN);
  f1 = !((isNaN(aN) && (wA = w1)) || (aN < 0 && (wA = w2)) || (aN < e && (wA = w3))) && true;
  // x.innerHTML = wA;
  f2 = !((isNaN(bN) && (wB = w1)) || (bN < 0 && (wB = w2)) || (bN < e && (wB = w3))) && true;
  // y.innerHTML = wB;
  f3 = !((isNaN(cN) && (wC = w1)) || (cN < 0 && (wC = w2)) || (cN < e && (wC = w3))) && true;
  // z.innerHTML = wC;
  return f1 && f2 && f3;
}
module.exports = {checkNum};