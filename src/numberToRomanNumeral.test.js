const convertToRomanNumeral = require('./numberToRomanNumeral');

describe('Converts an integer to a Roman Number', () => {
  test('Convert the number 1 to I', () => {
    expect(convertToRomanNumeral(1)).toBe('I');
  });
  test('Convert the number 2 to II', () => {
    expect(convertToRomanNumeral(2)).toBe('II');
  });
});
