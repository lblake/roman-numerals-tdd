const convertNumberToRomanNumeral = (integer) => {
  let Numeral = '';
  const romanNumber = {
    I: 'I',
    IV: 'IV',
    V: 'V',
    IX: 'IX',
    X: 'X',
    XL: 'XL',
    L: 'L',
    XC: 'XC',
    C: 'C',
    CD: 'CD',
    D: 'D',
    M: 'M',
  };

  while (integer > 0) {
    if (integer < 4) {
      Numeral += romanNumber.I;
      integer -= 1;
    } else if (integer == 4) {
      Numeral += romanNumber.IV;
      integer -= 4;
    } else if (integer >= 5 && integer < 9) {
      Numeral += romanNumber.V;
      integer -= 5;
    } else if (integer === 9) {
      Numeral += romanNumber.IX;
      integer -= 9;
    } else if (integer >= 10 && integer < 40) {
      Numeral += romanNumber.X;
      integer -= 10;
    } else if (integer >= 40 && integer < 50) {
      Numeral += romanNumber.XL;
      integer -= 40;
    } else if (integer >= 50 && integer < 90) {
      Numeral += romanNumber.L;
      integer -= 50;
    } else if (integer >= 90 && integer < 100) {
      Numeral += romanNumber.XC;
      integer -= 90;
    } else if (integer >= 100 && integer < 400) {
      Numeral += romanNumber.C;
      integer -= 100;
    } else if (integer >= 400 && integer < 500) {
      Numeral += romanNumber.CD;
      integer -= 400;
    } else if (integer >= 500 && integer < 900) {
      Numeral += romanNumber.D;
      integer -= 500;
    } else if (integer >= 900 && integer < 3000) {
      Numeral += romanNumber.M;
      integer -= 1000;
    } else {
      integer -= 1;
    }
  }

  return Numeral;
};

module.exports = convertNumberToRomanNumeral;
