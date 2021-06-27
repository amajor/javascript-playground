const reverseInteger = (input) => {
  const minInclusiveRange = -(2 ** 31); // -2 raised to the power of 31
  const maxInclusiveRange = (2 ** 31) - 1; // 2 raised to the power of 31, minus 1

  // First check if input is an integer, then check if it is in range.
  if (!Number.isInteger(input)) {
    // Throw an error if the input is not an integer.
    throw new Error('Input is not an integer.');
  } else if (input < minInclusiveRange || input > maxInclusiveRange) {
    return 0;
  }

  const isNegative = input < 0;
  const numberString = `${Math.abs(input)}`;
  const stringArray = String(numberString).split('').map((num) => num);

  let newNumberString = isNegative ? '-' : '';
  for (let i = stringArray.length - 1; i >= 0; i -= 1) {
    newNumberString += stringArray[i];
  }

  return parseInt(newNumberString, 10);
};

const reverseIntegerVariation = (input) => {
  // Throw an error if the input is not an integer.
  if (!Number.isInteger(input)) throw new Error('Input is not an integer.');

  // Return 0 if the input is outside of the range limit.
  const minInclusiveRange = -(2 ** 31); // -2 raised to the power of 31
  const maxInclusiveRange = (2 ** 31) - 1; // 2 raised to the power of 31, minus 1
  if (input < minInclusiveRange || input > maxInclusiveRange) return 0;

  // Return 0 if the input is 0.
  if (input === 0) return 0;

  // Determine if its negative and store that as a multiplication factor.
  const absoluteValue = Math.abs(input);
  const factor = input / absoluteValue;

  // Reverse the number.
  const reversedNumber = parseInt(`${absoluteValue}`.split('').reverse().join(''), 10);

  return reversedNumber * factor;
};

export {
  reverseInteger,
  reverseIntegerVariation,
};
