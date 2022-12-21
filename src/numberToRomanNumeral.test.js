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
    [101, 'CI'],
    [200, 'CC'],
    [400, 'CD'],
    [500, 'D'],
    [550, 'DL'],
    [649, 'DCXLIX'],
    [798, 'DCCXCVIII'],
    [891, 'DCCCXCI'],
    [1000, 'M'],
    [1023, 'MXXIII'],
    [2014, 'MMXIV'],
    [3000, 'MMM'],
  ])(`Converts the number %i,to the roman numeral %s`, (number, result) => {
    expect(convertToRomanNumeral(number)).toBe(result);
  });
});
