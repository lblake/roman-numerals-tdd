const convertNumberToRomanNumeral = (integer) => {
  let romanNumeral = '';

  while (integer > 0) {
    if (integer < 4) {
      romanNumeral += 'I';
      integer -= 1;
    } else if (integer == 4) {
      romanNumeral += 'IV';
      integer -= 4;
    }
  }
  return romanNumeral;
};

module.exports = convertNumberToRomanNumeral;
