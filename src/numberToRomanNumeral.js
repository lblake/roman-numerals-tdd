const convertNumberToRomanNumeral = (integer) => {
  let romanNumeral = '';

  while (integer > 0) {
    if (integer < 4) {
      romanNumeral += 'I';
      integer -= 1;
    } else if (integer == 4) {
      romanNumeral += 'IV';
      integer -= 4;
    } else if (integer >= 5 && integer < 9) {
      romanNumeral += 'V';
      integer -= 5;
    } else if (integer === 9) {
      romanNumeral += 'IX';
      integer -= 9;
    } else if (integer >= 10) {
      romanNumeral += 'X';
      integer -= 10;
    } else {
      integer -= 1;
    }
  }

  return romanNumeral;
};

module.exports = convertNumberToRomanNumeral;
