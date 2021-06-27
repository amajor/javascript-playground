const reverseInteger = (input) => {
  const minInclusiveRange = -231;
  const maxInclusiveRange = 231 - 1;

  // First check if input is an integer, then check if it is in range.
  if (!Number.isInteger(input)) {
    // Throw an error if the input is not an integer.
    throw new Error('Input is not an integer.');
  } else if (input < minInclusiveRange || input > maxInclusiveRange) {
    // Throw an error if the input is outside of range.
    throw new Error('Input is outside of 32-bit integer range.');
  }

  const isNegative = input < 0;
  const numberString = `${Math.abs(input)}`;
  const stringArray = String(numberString).split("").map((num) => num);

  let newNumberString = isNegative ? '-' : '';
  for (let i = stringArray.length - 1; i >=0 ; i--) {
    newNumberString += stringArray[i];
  }

  return parseInt(newNumberString);
};

export {
  reverseInteger,
};