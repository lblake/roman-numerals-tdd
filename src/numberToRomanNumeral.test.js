const convertToRomanNumeral = require('./numberToRomanNumeral');

describe('Converts a number to  a Roman Numeral', () => {
  test('Converts the number 1 to I', () => {
    expect(convertToRomanNumeral(1)).toBe('I');
  });
});
