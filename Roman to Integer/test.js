import assert from 'assert';
import { romanToInteger } from './index.js';

describe('Roman to Integer', () => {
  it('should throw an error if a solution does not exist', () => {
    assert.throws(
      () => romanToInteger(),
      /^Error: This function has not been written yet.*/,
    );
  });

  it('should have more tests created.');
});
