const convertToRomanNumeral = require('./numberToRomanNumeral');

describe('Converts an integer to a roman number', () => {
  test('Convert the number 1 to I', () => {
    expect(convertToRomanNumeral(1)).toBe('I');
  });
  test('Convert the number 2 to II', () => {
    expect(convertToRomanNumeral(2)).toBe('II');
  });
  test('Convert the number 3 to III', () => {
    expect(convertToRomanNumeral(3)).toBe('III');
  });

  test('Convert the number 4 to IV', () => {
    expect(convertToRomanNumeral(4)).toBe('IV');
  });

  test('Convert the number 5 to V', () => {
    expect(convertToRomanNumeral(5)).toBe('V');
  });
 
});
