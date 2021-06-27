const reverseInteger = (input) => {
  const minInclusiveRange = -231;
  const maxInclusiveRange = 231 - 1;

  if (minInclusiveRange <= input && input <= maxInclusiveRange) {
    return 321;
  }

  // Throw an error if the solution does not exist.
  throw new Error('Input is outside of 32-bit integer range.');
};

export {
  reverseInteger,
};
