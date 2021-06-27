import assert from 'assert';
import {
  palindromeInteger,
  palindromeIntegerVariation,
} from './index.js';

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

  it('should return true if the input is 123454321', () => {
    const input = 123454321;
    const expected = true;
    const actual = palindromeInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return true if the input is 2147337412', () => {
    const input = 2147337412;
    const expected = true;
    const actual = palindromeInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return false if the input is not an integer', () => {
    const theFloat = 1.2;
    const theString = 'hello world';
    const theArray = [0, 1.2, 'hellow world'];
    const theObject = {};
    const theFunction = () => { console.log('hello world'); }; // eslint-disable-line
    const expected = false;

    assert.strictEqual(palindromeInteger(theFloat), expected);
    assert.strictEqual(palindromeInteger(theString), expected);
    assert.strictEqual(palindromeInteger(theArray), expected);
    assert.strictEqual(palindromeInteger(theObject), expected);
    assert.strictEqual(palindromeInteger(theFunction), expected);
    assert.strictEqual(palindromeInteger(null), expected);
    assert.strictEqual(palindromeInteger(undefined), expected);
  });

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

describe.only('Palindrome Integer Variation', () => {
  it('should return true if the input is 121 (Example 1)', () => {
    const input = 121;
    const expected = true;
    const actual = palindromeIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return false if the input is -121 (Example 2)', () => {
    const input = -121;
    const expected = false;
    const actual = palindromeIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return false if the input is 10 (Example 3)', () => {
    const input = 10;
    const expected = false;
    const actual = palindromeIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return false if the input is -101 (Example 4)', () => {
    const input = -101;
    const expected = false;
    const actual = palindromeIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return true if the input is 123454321', () => {
    const input = 123454321;
    const expected = true;
    const actual = palindromeIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return true if the input is 2147337412', () => {
    const input = 2147337412;
    const expected = true;
    const actual = palindromeIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return false if the input is not an integer', () => {
    const theFloat = 1.2;
    const theString = 'hello world';
    const theArray = [0, 1.2, 'hellow world'];
    const theObject = {};
    const theFunction = () => { console.log('hello world'); }; // eslint-disable-line
    const expected = false;

    assert.strictEqual(palindromeIntegerVariation(theFloat), expected);
    assert.strictEqual(palindromeIntegerVariation(theString), expected);
    assert.strictEqual(palindromeIntegerVariation(theArray), expected);
    assert.strictEqual(palindromeIntegerVariation(theObject), expected);
    assert.strictEqual(palindromeIntegerVariation(theFunction), expected);
    assert.strictEqual(palindromeIntegerVariation(null), expected);
    assert.strictEqual(palindromeIntegerVariation(undefined), expected);
  });

  it('should throw an error if the input is below the minimum inclusive value', () => {
    const minInclusiveRange = -(2 ** 31);
    const input = minInclusiveRange - 1;
    assert.throws(
      () => palindromeIntegerVariation(input),
      /^Error: Input is outside of the range limit.*/,
    );
  });

  it('should throw an error if the input is above the maximum inclusive value', () => {
    const maxInclusiveRange = (2 ** 31) - 1;
    const input = maxInclusiveRange + 1;
    assert.throws(
      () => palindromeIntegerVariation(input),
      /^Error: Input is outside of the range limit.*/,
    );
  });
});
