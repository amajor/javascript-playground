import assert from 'assert';
import { addTwoNumbers } from './index.js';

describe('Add Two Numbers', () => {
  it('should throw an error if a solution does not exist', () => {
    assert.throws(
      () => addTwoNumbers(),
      /^Error: This function has not been written yet.*/,
    );
  });

  it('should have more tests created.');
});
