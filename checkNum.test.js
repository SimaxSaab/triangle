const { checkNum } = require('./checkNum');
const {defineCorrectnessTriangle} = require('./defineCorrectnessTriangle');
const {defineEquilateralTriangle} = require('./defineEquilateralTriangle');
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
    expect(defineEquilateralTriangle(1, 1, 1)).toBeTruthy();
    expect(defineEquilateralTriangle(2, 1, 1)).toBeFalsy();
    expect(defineEquilateralTriangle(1, 2, 1)).toBeFalsy();
    expect(defineEquilateralTriangle(1, 1, 2)).toBeFalsy();
    expect(defineCorrectnessTriangle(2, 5, 10)).toBeFalsy();
    expect(defineCorrectnessTriangle(5, 2, 10)).toBeFalsy();
    expect(defineCorrectnessTriangle(2, 10, 5)).toBeFalsy();
    expect(defineEquilateralTriangle(5, 10, 2)).toBeFalsy();
    expect(defineEquilateralTriangle(10, 5, 2)).toBeFalsy();
    expect(defineEquilateralTriangle(10, 2, 5)).toBeFalsy();
    expect(defineEquilateralTriangle(2, 6, 8)).toBeFalsy();
    expect(defineEquilateralTriangle(6, 2, 8)).toBeFalsy();
    expect(defineEquilateralTriangle(2, 8, 6)).toBeFalsy();
    expect(defineEquilateralTriangle(6, 8, 2)).toBeFalsy();
    expect(defineEquilateralTriangle(8, 6, 2)).toBeFalsy();
    expect(defineEquilateralTriangle(8, 2, 6)).toBeFalsy();
  })
})