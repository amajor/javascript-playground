import assert from 'assert';
import { palindromeInteger } from './index.js';

describe.only('Palindrome Integer', () => {
  it('should return true if the input is 121');

  it('should return false if the input is -121');

  it('should return false if the input is 10');

  it('should return false if the input is -101');

  it('should throw an error if the input is below the minimum inclusive value', () => {
    const minInclusiveRange = -(2 ** 31);
    const input = minInclusiveRange - 1;
    assert.throws(
      () => palindromeInteger(input),
      /^Error: Input is outside of the range limit.*/,
    );
  });

  it('should throw an error if the input is above the maximum inclusive value', () => {
    const maxInclusiveRange = (2 ** 31) - 1;
    const input = maxInclusiveRange + 1;
    assert.throws(
      () => palindromeInteger(input),
      /^Error: Input is outside of the range limit.*/,
    );
  });
});
