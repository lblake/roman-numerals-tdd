const convertNumberToRomanNumeral = (integer) => {
  if (integer === 1) {
    return 'I';
  } else if (integer === 2) {
    return 'II';
  } else if (integer === 3) {
    return 'III';
  } else if (integer === 4) {
    return 'IV';
  }
};

module.exports = convertNumberToRomanNumeral;
