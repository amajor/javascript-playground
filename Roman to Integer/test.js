import assert from 'assert';
import { romanToInteger } from './index.js';

describe.only('Roman to Integer', () => {
  it('should return 3 when provided with an input of `III`.', () => {
    const romanNumerals = 'III';
    const expected = 3;
    const actual = romanToInteger(romanNumerals);

    assert.strictEqual(actual, expected);
  });

  it('should return 4 when provided with an input of `IV`.');
  it('should return 9 when provided with an input of `IX`.');
  it('should return 58 when provided with an input of `LVIII`.');
  it('should return 1994 when provided with an input of `MCMXCIV`.');

  it('should throw an error if the input string is empty.', () => {
    const romanNumerals = '';

    assert.throws(
      () => romanToInteger(romanNumerals),
      /^Error: Cannot convert an empty input value.*/,
    );
  });
});
