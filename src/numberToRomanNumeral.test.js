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
  ])(`should convert the number %i, to roman numeral %s`, (number, result) => {
    expect(convertToRomanNumeral(number)).toBe(result);
  });
});
