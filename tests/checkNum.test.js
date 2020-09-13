const { checkNum } = require('./checkNum');
const {defineCorrectnessTriangle} = require('./defineCorrectnessTriangle');
const {defineEquilateralTriangle} = require('./defineEquilateralTriangle');
const {defineRightTriangle} = require('./defineRightTriangle');
const {defineIsoscelesTriangle} = require('./defineIsoscelesTriangle');
const { TestScheduler } = require('jest');

describe('Test of checkNum function', () => {
  test('numbers don\'t have to be strings', () => {
    expect(checkNum('a', 'b', 'c')).toBeFalsy();
    expect(checkNum('a', 1, 1)).toBeFalsy();
    expect(checkNum(1, 'b', 1)).toBeFalsy();
    expect(checkNum(1, 1, 'c')).toBeFalsy();
    expect(checkNum('a', 1, 'c')).toBeFalsy();
    expect(checkNum('a', 'b', 1)).toBeFalsy();
    expect(checkNum(1, 'b', 'c')).toBeFalsy();
    expect(checkNum('1', '1', '1')).toBeTruthy();
    expect(checkNum('1', '1', 1)).toBeTruthy();
    expect(checkNum('1', 1, '1')).toBeTruthy();
    expect(checkNum(1, '1', '1')).toBeTruthy();
    expect(checkNum(1, 1, '1')).toBeTruthy();
    expect(checkNum(1, '1', 1)).toBeTruthy();
    expect(checkNum('1', 1, 1)).toBeTruthy();
  });
  test('numbers don\'t have to be zero', () => {
    expect(checkNum(1, 1, 1)).toBeTruthy();
    expect(checkNum(0, 1, 1)).toBeFalsy();
    expect(checkNum(1, 0, 1)).toBeFalsy();
    expect(checkNum(1, 1, 0)).toBeFalsy();
    expect(checkNum(1, 0, 0)).toBeFalsy();
    expect(checkNum(0, 0, 1)).toBeFalsy();
    expect(checkNum(0, 1, 0)).toBeFalsy();
    expect(checkNum(0, 0, 0)).toBeFalsy();
  });
  test('numbers don\'t have to be negative', () => {
    expect(checkNum(-1, -1, -1)).toBeFalsy();
    expect(checkNum(1, -1, -1)).toBeFalsy();
    expect(checkNum(-1, 1, -1)).toBeFalsy();
    expect(checkNum(-1, -1, 1)).toBeFalsy();
    expect(checkNum(-1, 1, 1)).toBeFalsy();
    expect(checkNum(1, 1, -1)).toBeFalsy();
    expect(checkNum(1, -1, 1)).toBeFalsy();
    expect(checkNum(-0, -0, -0)).toBeFalsy();
  });
});

describe('Test of defineCorrectnessTriangle function', () => {
  test('The sum of the two sides must not be more than the third one', () => {
    expect(defineCorrectnessTriangle(1, 1, 1)).toBeTruthy();
    expect(defineCorrectnessTriangle(2, 5, 10)).toBeFalsy();
    expect(defineCorrectnessTriangle(5, 2, 10)).toBeFalsy();
    expect(defineCorrectnessTriangle(2, 10, 5)).toBeFalsy();
    expect(defineCorrectnessTriangle(5, 10, 2)).toBeFalsy();
    expect(defineCorrectnessTriangle(10, 5, 2)).toBeFalsy();
    expect(defineCorrectnessTriangle(10, 2, 5)).toBeFalsy();
    expect(defineCorrectnessTriangle(2, 6, 8)).toBeFalsy();
    expect(defineCorrectnessTriangle(6, 2, 8)).toBeFalsy();
    expect(defineCorrectnessTriangle(2, 8, 6)).toBeFalsy();
    expect(defineCorrectnessTriangle(6, 8, 2)).toBeFalsy();
    expect(defineCorrectnessTriangle(8, 6, 2)).toBeFalsy();
    expect(defineCorrectnessTriangle(8, 2, 6)).toBeFalsy();
  })
});

describe('Test of defineEquilateralTriangle function', () => {
  test('All sides must be equal', () => {
    expect(defineEquilateralTriangle(1, 1, 1)).toBeFalsy();
    expect(defineEquilateralTriangle(2, 1, 1)).toBeTruthy();
    expect(defineEquilateralTriangle(1, 2, 1)).toBeTruthy();
    expect(defineEquilateralTriangle(1, 1, 2)).toBeTruthy();
    expect(defineEquilateralTriangle(2, 5, 10)).toBeTruthy();
    expect(defineEquilateralTriangle(5, 2, 10)).toBeTruthy();
    expect(defineEquilateralTriangle(2, 10, 5)).toBeTruthy();
    expect(defineEquilateralTriangle(5, 10, 2)).toBeTruthy();
    expect(defineEquilateralTriangle(10, 5, 2)).toBeTruthy();
    expect(defineEquilateralTriangle(10, 2, 5)).toBeTruthy();
    expect(defineEquilateralTriangle(2, 6, 8)).toBeTruthy();
    expect(defineEquilateralTriangle(6, 2, 8)).toBeTruthy();
    expect(defineEquilateralTriangle(2, 8, 6)).toBeTruthy();
    expect(defineEquilateralTriangle(6, 8, 2)).toBeTruthy();
    expect(defineEquilateralTriangle(8, 6, 2)).toBeTruthy();
    expect(defineEquilateralTriangle(8, 2, 6)).toBeTruthy();
  })
});

describe('Test of defineRightTriangle function', () => {
  test('The square of the hypotenuse must be equal to the sum of the squares of the legs', () => {
    expect(defineRightTriangle(1, 1, 1)).toBeFalsy();
    expect(defineRightTriangle(3, 4, 5)).toBeTruthy();
    expect(defineRightTriangle(4, 3, 5)).toBeTruthy();
    expect(defineRightTriangle(3, 5, 4)).toBeTruthy();
    expect(defineRightTriangle(4, 5, 3)).toBeTruthy();
    expect(defineRightTriangle(5, 3, 4)).toBeTruthy();
    expect(defineRightTriangle(5, 4, 3)).toBeTruthy();
    expect(defineRightTriangle(1, 1, 1.414, 0.01)).toBeTruthy();
    expect(defineRightTriangle(1.414, 1, 1, 0.01)).toBeTruthy();
    expect(defineRightTriangle(1, 1.414, 1, 0.01)).toBeTruthy();
    expect(defineRightTriangle(2, 6, 6.3245, 0.001)).toBeTruthy();
    expect(defineRightTriangle(6, 2, 6.3245, 0.001)).toBeTruthy();
    expect(defineRightTriangle(2, 6.3245, 6, 0.001)).toBeTruthy();
    expect(defineRightTriangle(6, 6.3245, 2, 0.001)).toBeTruthy();
    expect(defineRightTriangle(6.3245, 6, 2, 0.001)).toBeTruthy();
    expect(defineRightTriangle(6.3245, 2, 6, 0.001)).toBeTruthy();
    expect(defineRightTriangle(1, 1, 1.414, 0.0001)).toBeFalsy();
    expect(defineRightTriangle(1.414, 1, 1, 0.0001)).toBeFalsy();
    expect(defineRightTriangle(1, 1.414, 1, 0.0001)).toBeFalsy();
    expect(defineRightTriangle(2, 6, 6.3245, 0.00001)).toBeFalsy();
    expect(defineRightTriangle(6, 2, 6.3245, 0.00001)).toBeFalsy();
    expect(defineRightTriangle(2, 6.3245, 6, 0.00001)).toBeFalsy();
    expect(defineRightTriangle(6, 6.3245, 2, 0.00001)).toBeFalsy();
    expect(defineRightTriangle(6.3245, 6, 2, 0.00001)).toBeFalsy();
    expect(defineRightTriangle(6.3245, 2, 6, 0.00001)).toBeFalsy();
  })
});

describe('Test of defineIsoscelesTriangle function', () => {
  test('Two sides are equal and not equal to the third', () => {
    expect(defineIsoscelesTriangle(1, 1, 1)).toBeFalsy();
    expect(defineIsoscelesTriangle(2, 1, 1)).toBeTruthy();
    expect(defineIsoscelesTriangle(1, 2, 1)).toBeTruthy();
    expect(defineIsoscelesTriangle(1, 1, 2)).toBeTruthy();
    expect(defineIsoscelesTriangle(10, 10, 10)).toBeFalsy();
    expect(defineIsoscelesTriangle(2, 3, 3)).toBeTruthy();
    expect(defineIsoscelesTriangle(3, 2, 3)).toBeTruthy();
    expect(defineIsoscelesTriangle(3, 3, 2)).toBeTruthy();
    expect(defineIsoscelesTriangle(2, 5, 10)).toBeFalsy();
    expect(defineIsoscelesTriangle(5, 2, 10)).toBeFalsy();
    expect(defineIsoscelesTriangle(2, 10, 5)).toBeFalsy();
    expect(defineIsoscelesTriangle(5, 10, 2)).toBeFalsy();
    expect(defineIsoscelesTriangle(10, 5, 2)).toBeFalsy();
    expect(defineIsoscelesTriangle(10, 2, 5)).toBeFalsy();
    expect(defineIsoscelesTriangle(2, 6, 8)).toBeFalsy();
    expect(defineIsoscelesTriangle(6, 2, 8)).toBeFalsy();
    expect(defineIsoscelesTriangle(2, 8, 6)).toBeFalsy();
    expect(defineIsoscelesTriangle(6, 8, 2)).toBeFalsy();
    expect(defineIsoscelesTriangle(8, 6, 2)).toBeFalsy();
    expect(defineIsoscelesTriangle(8, 2, 6)).toBeFalsy();
  })
});