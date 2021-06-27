const palindromeInteger = (input) => {
  // Throw error if the input is outside of the range limit.
  const minInclusiveRange = -(2 ** 31); // -2 raised to the power of 31
  const maxInclusiveRange = (2 ** 31) - 1; // 2 raised to the power of 31, minus 1
  if (input < minInclusiveRange || input > maxInclusiveRange) throw new Error('Input is outside of the range limit.');

  // Return false if the number is negative.
  if (input < 0) return false;

  return true;
};

export {
  palindromeInteger,
};
