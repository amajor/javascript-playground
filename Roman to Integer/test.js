import assert from 'assert';
import { romanToInteger } from './index.js';

describe('Roman to Integer', () => {
  it('should return 3 when provided with an input of `III`', () => {
    const romanNumerals = 'III';
    const expected = 3;
    const actual = romanToInteger(romanNumerals);

    assert.strictEqual(actual, expected);
  });

  it('should return 4 when provided with an input of `IV`', () => {
    const romanNumerals = 'IV';
    const expected = 4;
    const actual = romanToInteger(romanNumerals);

    assert.strictEqual(actual, expected);
  });

  it('should return 9 when provided with an input of `IX`', () => {
    const romanNumerals = 'IX';
    const expected = 9;
    const actual = romanToInteger(romanNumerals);

    assert.strictEqual(actual, expected);
  });

  it('should return 58 when provided with an input of `LVIII`', () => {
    const romanNumerals = 'LVIII';
    const expected = 58;
    const actual = romanToInteger(romanNumerals);

    assert.strictEqual(actual, expected);
  });

  it('should return 1994 when provided with an input of `MCMXCIV`', () => {
    const romanNumerals = 'MCMXCIV';
    const expected = 1994;
    const actual = romanToInteger(romanNumerals);

    assert.strictEqual(actual, expected);
  });

  it('should throw an error if the input string is empty', () => {
    const romanNumerals = '';

    assert.throws(
      () => romanToInteger(romanNumerals),
      /^Error: Cannot convert an empty input value.*/,
    );
  });

  it('should throw an error if the input string is longer than 15-characters', () => {
    const romanNumerals = 'IIIIVVVVXXXXLCDM';

    assert.throws(
      () => romanToInteger(romanNumerals),
      /^Error: Cannot convert string longer than 15-characters.*/,
    );
  });

  it('should throw an error if the input is not a string', () => {
    const romanNumerals = [0, 'hello', 3.14];
    assert.throws(
      () => romanToInteger(romanNumerals),
      /^Error: Cannot convert a non-string.*/,
    );
  });
});
