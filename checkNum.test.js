const {checkNum} = require('./checkNum');
const { TestScheduler } = require('jest');

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