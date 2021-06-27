const palindromeInteger = (input) => {
  // Throw error if the input is outside of the range limit.
  const minInclusiveRange = -(2 ** 31); // -2 raised to the power of 31
  const maxInclusiveRange = (2 ** 31) - 1; // 2 raised to the power of 31, minus 1
  if (input < minInclusiveRange || input > maxInclusiveRange) throw new Error('Input is outside of the range limit.');

  // Return false if the number is negative.
  if (input < 0) return false;

  // Reverse the number.
  const reversedNumber = parseInt(`${input}`.split('').reverse().join(''), 10);

  return input === reversedNumber;
};

const palindromeIntegerVariation = (input) => {
  // Throw error if the input is outside of the range limit.
  const minInclusiveRange = -(2 ** 31); // -2 raised to the power of 31
  const maxInclusiveRange = (2 ** 31) - 1; // 2 raised to the power of 31, minus 1
  if (input < minInclusiveRange || input > maxInclusiveRange) throw new Error('Input is outside of the range limit.');

  // SPECIAL CASES:
  // - When input < 0, input is not a palindrome.
  // - If the last digit of the number is 0, in order to be a palindrome,
  //   the first digit of the number also needs to be 0.
  //   Only 0 satisfies this property.
  if (input < 0 || (input % 10 === 0 && input !== 0) || !Number.isInteger(input)) return false;

  let reversedNumber = 0;
  let inputNumber = input;
  while (inputNumber > reversedNumber) {
    reversedNumber = (reversedNumber * 10) + (inputNumber % 10);
    inputNumber = Math.floor(inputNumber / 10);
  }

  // When the length is an odd number, we can get rid of the middle digit by reversedNumber/10
  // When the input is 12321, at the end of the loop we get inputNumber = 12, reversedNumber = 123.
  // The middle digit doesn't matter in palidrome (it will always equal to itself);
  // we can simply get rid of it.
  return inputNumber === reversedNumber || inputNumber === Math.floor(reversedNumber / 10);
};

export {
  palindromeInteger,
  palindromeIntegerVariation,
};
