let a = document.querySelector("#a"),
  b = document.querySelector("#b"),
  c = document.querySelector("#c"),
  x = document.querySelector(".x"),
  y = document.querySelector(".y"),
  z = document.querySelector(".z"),
  r = document.querySelector(".r"),
  aN,
  bN,
  cN,
  wA = (wB = wC = ""),
  w1 = "Введенное значение не является числом!",
  w2 = "Отрицательной длины быть не может!",
  w3 = "Без длины нет стороны!",
  r1 = " Треугольник равносторонний",
  r2 = ' Треугольник прямоугольный',
  r3 = ' Треугольник равнобедренный',
  rS = 'По этим сторонам треугольник существует!',
  rU = 'Такого треугольника не существует!',
  e = 1e-5;

document.querySelector(".def").addEventListener("click", def);

function def() {
  r.innerHTML = '';
  // checkNum() && defineEquilateralTriangle() && defineRightTriangle();
  checkNum() && defineCorrectnessTriangle() && defineEquilateralTriangle() && defineRightTriangle() && defineIsoscelesTriangle();
}

function checkNum() {
  let f1, f2, f3;
  wA = wB = wC = "";
  aN = parseFloat(a.value);
  bN = parseFloat(b.value);
  cN = parseFloat(c.value);
  // console.log(aN);
  f1 =
    !(
      (isNaN(aN) && (wA = w1)) ||
      (aN < 0 && (wA = w2)) ||
      (aN < e && (wA = w3))
    ) && true;
  x.innerHTML = wA;
  f2 =
    !(
      (isNaN(bN) && (wB = w1)) ||
      (bN < 0 && (wB = w2)) ||
      (bN < e && (wB = w3))
    ) && true;
  y.innerHTML = wB;
  f3 =
    (!(isNaN(cN) && (wC = w1)) ||
      (cN < 0 && (wC = w2)) ||
      (cN < e && (wC = w3))) &&
    true;
  z.innerHTML = wC;
  return f1 && f2 && f3;
}

function defineEquilateralTriangle() {
  // if (aN == bN && aN == cN && bN == cN) {
  //   r.innerHTML = r1;
  //   return false;
  // } 
  // return true;
  return !(aN == bN && aN == cN && bN == cN && (r.innerHTML += r1));
}

function defineRightTriangle() {
  console.log('1');
  // if (aN * aN + bN * bN == cN * cN || aN * aN + cN * cN == bN * bN || bN * bN + cN * cN == aN * aN) {
  //   r.innerHTML = r2;
  // }
    // return (aN * aN + bN * bN == cN * cN || aN * aN + cN * cN == bN * bN || bN * bN + cN * cN == aN * aN) ? !!(r.innerHTML += r2) : true;
    return (aN * aN + bN * bN - cN * cN < e || aN * aN + cN * cN - bN * bN < e || bN * bN + cN * cN - aN * aN < e) ? !!(r.innerHTML += r2) : true;
}

function defineIsoscelesTriangle() {
  if (aN == bN && aN != cN || aN == cN && aN !=bN || bN == cN && bN != aN) {
    r.innerHTML += r3;
  }
}

function defineCorrectnessTriangle() {
  // if (aN + bN > cN && aN + cN > bN && bN + cN > aN) {
  //   r.innerHTML = rS; return true;
  // } else {
  //   r.innerHTML = rU; return false;
  // }
  return (aN + bN > cN && aN + cN > bN && bN + cN > aN) ? !!(r.innerHTML = rS) : !(r.innerHTML = rU);
}

