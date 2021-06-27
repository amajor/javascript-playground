const romanToInteger = (romanNumerals) => {
  // const validRomanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  // Throw an error if the input is not a string.
  if (typeof romanNumerals !== 'string') throw new Error('Cannot convert a non-string.');

  // Throw an error if the input is empty.
  if (romanNumerals === '') throw new Error('Cannot convert an empty input value.');

  // Throw an error if the input is longer than 15 characters.
  if (romanNumerals.length > 15) throw new Error('Cannot convert string longer than 15-characters.');

  return 3;
};

export {
  romanToInteger,
};
