import assert from 'assert';
import { reverseInteger } from './index.js';

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

  it('should return 32 when given 231 - 1', () => {
    const input = (231 - 1);
    const expected = 32;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return -132 when given -231', () => {
    const input = (-231);
    const expected = -132;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should return 0 if the input is below the minimum inclusive value', () => {
    const minInclusiveRange = -231;
    const input = minInclusiveRange - 1;
    const expected = 0;
    const actual = reverseInteger(input);

    assert.strictEqual(actual, expected);
  });

  it('should throw an error if the input is above the maximum inclusive value', () => {
    const maxInclusiveRange = 231 - 1;
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
