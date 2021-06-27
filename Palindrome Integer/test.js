import assert from 'assert';
import { palindromeInteger } from './index.js';

describe('Palindrome Integer', () => {
  it('should throw an error if a solution does not exist', () => {
    assert.throws(
      () => palindromeInteger(),
      /^Error: This function has not been written yet.*/,
    );
  });

  it('should have more tests created.');
});
