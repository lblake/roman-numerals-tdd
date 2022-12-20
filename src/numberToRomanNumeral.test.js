const convertToRomanNumeral = require('./numberToRomanNumeral');

describe('Converts an integer to a roman number', () => {
  it.each([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [11, 'XI'],
    [16, 'XVI'],
    [29, 'XXIX'],
    [44, 'XLIV'],
    [68, 'LXVIII'],
    [83, 'LXXXIII'],
    [97, 'XCVII'],
    [99, 'XCIX'],
    [101, "CI"],
    [200, "CC"],
    [400, 'CD'],
  ])(
    `should convert the number %i,to the roman numeral %s`,
    (number, result) => {
      expect(convertToRomanNumeral(number)).toBe(result);
    }
  );
});
