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

  it('should return 21 when given 120 (Example 3)');

  it('should return 0 when given 120 (Example 4)');

  it('should return 32 when given 231 - 1');

  it('should return -132 when given -231');

  it('should throw an error if the input is below the minimum inclusive value', () => {
    const minInclusiveRange = -231;
    assert.throws(
      () => reverseInteger(minInclusiveRange - 1),
      /^Error: Input is outside of 32-bit integer range.*/,
    );
  });

  it('should throw an error if the input is above the maximum inclusive value', () => {
    const maxInclusiveRange = 231 - 1;
    assert.throws(
      () => reverseInteger(maxInclusiveRange + 1),
      /^Error: Input is outside of 32-bit integer range.*/,
    );
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
