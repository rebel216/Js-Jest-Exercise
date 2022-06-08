const { stringLength, reverseString } = require('./Task-1')
const assert = require('assert')

test('Take a string and return count', () => {
  expect(stringLength('123456')).toBe(6);
});
  
test('Not a proper string length', () => {
  expect(() => stringLength('1234567891011')).toThrow();
});

test('Empty string', () => {
  expect(() => stringLength('')).toThrow();
});

test('Reverse the string', () => {
  expect(reverseString('Neeraj')).toBe('jareeN');
});

