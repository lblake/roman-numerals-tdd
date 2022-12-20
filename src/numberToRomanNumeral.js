const convertNumberToRomanNumeral = (integer) => {
  let Numeral = '';
  const romanNumber = {
    One: 'I',
    Four: 'IV',
    Five: 'V',
    Nine: 'IX',
    Ten: 'X',
    Forty: 'XL',
    Fifty: 'L',
    Ninety: 'XC',
    OneHundred: 'C',
    FourHundred: 'CD',
    FiveHundred: 'D',
    Thousand: 'M',
  };

  while (integer > 0) {
    if (integer < 4) {
      Numeral += romanNumber.One;
      integer -= 1;
    } else if (integer == 4) {
      Numeral += romanNumber.Four;
      integer -= 4;
    } else if (integer >= 5 && integer < 9) {
      Numeral += romanNumber.Five;
      integer -= 5;
    } else if (integer === 9) {
      Numeral += romanNumber.Nine;
      integer -= 9;
    } else if (integer >= 10 && integer < 40) {
      Numeral += romanNumber.Ten;
      integer -= 10;
    } else if (integer >= 40 && integer < 50) {
      Numeral += romanNumber.Forty;
      integer -= 40;
    } else if (integer >= 50 && integer < 90) {
      Numeral += romanNumber.Fifty;
      integer -= 50;
    } else if (integer >= 90 && integer < 100) {
      Numeral += romanNumber.Ninety;
      integer -= 90;
    } else if (integer >= 100 && integer < 400) {
      Numeral += romanNumber.OneHundred;
      integer -= 100;
    } else if (integer >= 400 && integer < 500) {
      Numeral += romanNumber.FourHundred;
      integer -= 400;
    } else if (integer >= 500 && integer < 900) {
      Numeral += romanNumber.FiveHundred;
      integer -= 500;
    } else if (integer >= 900 && integer < 3000) {
      Numeral += romanNumber.Thousand;
      integer -= 1000;
    } else {
      integer -= 1;
    }
  }

  return Numeral;
};

module.exports = convertNumberToRomanNumeral;
