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
    } else {
      integer -= 1;
    }
  }

  return romanNumeral;
};

module.exports = convertNumberToRomanNumeral;
