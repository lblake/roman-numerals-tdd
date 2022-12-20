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
    } else if (integer >= 10 && integer < 40) {
      romanNumeral += 'X';
      integer -= 10;
    } else if (integer >= 40 && integer < 50) {
      romanNumeral += 'XL';
      integer -= 40;
    } else if (integer >= 50 && integer < 90) {
      romanNumeral += 'L';
      integer -= 50;
    } else if (integer >= 90 && integer < 100) {
      romanNumeral += 'XC';
      integer -= 90;
    } else if (integer >= 100 && integer < 400) {
      romanNumeral += 'C';
      integer -= 100;
    } else if (integer >= 400 && integer < 500) {
      romanNumeral += 'CD';
      integer -= 400;
    } else {
      integer -= 1;
    }
  }

  return romanNumeral;
};

module.exports = convertNumberToRomanNumeral;
