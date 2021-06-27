const romanToInteger = (romanNumeral) => {
  const romanNumeralsMap = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };

  // Throw an error if the input is not a string.
  if (typeof romanNumeral !== 'string') throw new Error('Cannot convert a non-string.');

  // Throw an error if the input is empty.
  if (romanNumeral === '') throw new Error('Cannot convert an empty input value.');

  // Throw an error if the input is longer than 15 characters.
  if (romanNumeral.length > 15) throw new Error('Cannot convert string longer than 15-characters.');

  const reverseRomanNumArray = [...romanNumeral].reverse();
  return reverseRomanNumArray
    .reduce(
      (accumulator, currentValue, index, original) => (!index
        || romanNumeralsMap[currentValue] >= romanNumeralsMap[original[index - 1]]
        ? accumulator + romanNumeralsMap[currentValue]
        : accumulator - romanNumeralsMap[currentValue]),
      0,
    );
};

export {
  romanToInteger,
};
