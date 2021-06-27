import assert from 'assert';
import { addTwoNumbers } from './index.js';

describe.only('Add Two Numbers', () => {
  it('should return [7,0,8] with inputs [2,4,3] and [5,6,4].', () => {
    const listOne = [2, 4, 3];
    const listTwo = [5, 6, 4];
    const expected = [7, 0, 8];
    const actual = addTwoNumbers(listOne, listTwo);

    assert.deepStrictEqual(actual, expected);
  });

  it('should return [0] with inputs [0] and [0].', () => {
    const listOne = [0];
    const listTwo = [0];
    const expected = [0];
    const actual = addTwoNumbers(listOne, listTwo);

    assert.deepStrictEqual(actual, expected);
  });

  it('should return [8,9,9,9,0,0,0,1] with inputs [9,9,9,9,9,9,9] and [9,9,9,9].', () => {
    const listOne = [9, 9, 9, 9, 9, 9, 9];
    const listTwo = [9, 9, 9, 9];
    const expected = [8, 9, 9, 9, 0, 0, 0, 1];
    const actual = addTwoNumbers(listOne, listTwo);

    assert.deepStrictEqual(actual, expected);
  });
});
