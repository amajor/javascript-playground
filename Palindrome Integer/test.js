import assert from 'assert';
import { palindromeInteger } from './index.js';

describe.only('Palindrome Integer', () => {
  it('should return true if the input is 121 (Example 1)', () => {
    const input = 121;
    const expected = true;
    const actual = palindromeInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return false if the input is -121 (Example 2)', () => {
    const input = -121;
    const expected = false;
    const actual = palindromeInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return false if the input is 10 (Example 3)', () => {
    const input = 10;
    const expected = false;
    const actual = palindromeInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return false if the input is -101 (Example 4)', () => {
    const input = -101;
    const expected = false;
    const actual = palindromeInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return false if the input is not an integer');

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
