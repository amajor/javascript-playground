import assert from 'assert';
import {
  reverseInteger,
  reverseIntegerVariation,
} from './index.js';

describe('Reverse Integer', () => {
  it('should return 321 when given 123 (Example 1)', () => {
    const input = 123;
    const expected = 321;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return -321 when given -123 (Example 2)', () => {
    const input = -123;
    const expected = -321;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 21 when given 120 (Example 3)', () => {
    const input = 120;
    const expected = 21;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 0 when given 0 (Example 4)', () => {
    const input = 0;
    const expected = 0;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 7463847412 when given (2^31) - 1 (which is 2147483648 - 1)', () => {
    const input = ((2 ** 31) - 1);
    const expected = 7463847412;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return -8463847412 when given -2^31 (which is -2147483648)', () => {
    const input = (-(2 ** 31));
    const expected = -8463847412;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 0 if the input is below the minimum inclusive value', () => {
    const minInclusiveRange = -(2 ** 31);
    const input = minInclusiveRange - 1;
    const expected = 0;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 0 if the input is above the maximum inclusive value', () => {
    const maxInclusiveRange = (2 ** 31) - 1;
    const input = maxInclusiveRange + 1;
    const expected = 0;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should throw an error if the input is not an integer', () => {
    const theFloat = 1.2;
    const theString = 'hello world';
    const theArray = [0, 1.2, 'hellow world'];

    assert.throws(
      () => reverseInteger(theFloat),
      /^Error: Input is not an integer.*/,
    );

    assert.throws(
      () => reverseInteger(theString),
      /^Error: Input is not an integer.*/,
    );

    assert.throws(
      () => reverseInteger(theArray),
      /^Error: Input is not an integer.*/,
    );
  });
});

describe('Reverse Integer Variation', () => {
  it('should return 321 when given 123 (Example 1)', () => {
    const input = 123;
    const expected = 321;
    const actual = reverseIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return -321 when given -123 (Example 2)', () => {
    const input = -123;
    const expected = -321;
    const actual = reverseIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 21 when given 120 (Example 3)', () => {
    const input = 120;
    const expected = 21;
    const actual = reverseIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 0 when given 0 (Example 4)', () => {
    const input = 0;
    const expected = 0;
    const actual = reverseIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 7463847412 when given (2^31) - 1 (which is 2147483648 - 1)', () => {
    const input = ((2 ** 31) - 1);
    const expected = 7463847412;
    const actual = reverseIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return -8463847412 when given -2^31 (which is -2147483648)', () => {
    const input = (-(2 ** 31));
    const expected = -8463847412;
    const actual = reverseIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 0 if the input is below the minimum inclusive value', () => {
    const minInclusiveRange = -(2 ** 31);
    const input = minInclusiveRange - 1;
    const expected = 0;
    const actual = reverseIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 0 if the input is above the maximum inclusive value', () => {
    const maxInclusiveRange = (2 ** 31) - 1;
    const input = maxInclusiveRange + 1;
    const expected = 0;

    const actual = reverseIntegerVariation(input);

    assert.strictEqual(actual, expected);
  });

  it('should throw an error if the input is not an integer', () => {
    const theFloat = 1.2;
    const theString = 'hello world';
    const theArray = [0, 1.2, 'hellow world'];

    assert.throws(
      () => reverseIntegerVariation(theFloat),
      /^Error: Input is not an integer.*/,
    );

    assert.throws(
      () => reverseIntegerVariation(theString),
      /^Error: Input is not an integer.*/,
    );

    assert.throws(
      () => reverseIntegerVariation(theArray),
      /^Error: Input is not an integer.*/,
    );
  });
});
