const convertToRomanNumeral = require('./numberToRomanNumeral');

test('Converts the number 1 to I', () => {
  expect(convertToRomanNumeral(1)).toBe('I');
});
