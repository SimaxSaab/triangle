let a = document.querySelector('#a'),
  b = document.querySelector('#b'),
  c = document.querySelector('#c'),
  x = document.querySelector('.x'),
  y = document.querySelector('.y'),
  z = document.querySelector('.z'),
  r = document.querySelector('.r'), aN, bN, cN, wA = wB = wC = '',
  w1 = 'Введенное значение не является числом!',
  w2 = 'Отрицательной длины быть не может!',
  w3 = 'Без длины нет стороны!',
  e = 1e-5;

document.querySelector('.def').addEventListener('click', def);

  

  function def() {
    let f;
    wA = wB = wC = '';
    aN = parseFloat(a.value);
    bN = parseFloat(b.value);
    cN = parseFloat(c.value);
    console.log(aN);
    f = (isNaN(aN) && (wA = w1)) || (aN < 0 && (wA = w2)) || (aN < e && (wA = w3)) && true;
    x.innerHTML = wA;
    f = (isNaN(bN) && (wB = w1)) || (bN < 0 && (wB = w2)) || (bN < e && (wB = w3)) && true;
    y.innerHTML = wB;
    f = (isNaN(cN) && (wC = w1)) || (cN < 0 && (wC = w2)) || (cN < e && (wC = w3)) && true;
    z.innerHTML = wC;
  }