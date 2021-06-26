import assert from 'assert';
import { twoSum, twoSumTwoPassHash } from './index.js';

describe('Two Sum: Brute Force', () => {
  it('should return [0,1] for nums=[2,7,11,15] and target=9 (Example 1)', () => {
    const nums = [2,7,11,15];
    const target = 9;
    
    const expected = [0,1];
    const actual = twoSum(nums, target);

    assert.deepStrictEqual(actual, expected);
  });

  it('should return [1,2] for nums=[3,2,4] and target=6 (Example 2)', () => {
    const nums = [3,2,4];
    const target = 6;
    
    const expected = [1,2];
    const actual = twoSum(nums, target);

    assert.deepStrictEqual(actual, expected);
  });

  it('should return [0,1] for nums=[3,3] and target=6 (Example 3)', () => {
    const nums = [3,3];
    const target = 6;
    
    const expected = [0,1];
    const actual = twoSum(nums, target);

    assert.deepStrictEqual(actual, expected);
  });

  it('should return [1,3] for nums=[2,7,11,15] and target=22', () => {
    const nums = [2,7,11,15];
    const target = 22;
    
    const expected = [1,3];
    const actual = twoSum(nums, target);

    assert.deepStrictEqual(actual, expected);
  });

  it('should throw an error if a solution does not exist', () => {
    const nums = [1,2,3,4];
    const target = 2;

    assert.throws(
      () => twoSum(nums, target),
      /^Error: A solution does not exist in the set*/
    );
  })
});

describe('Two Sum: Two-Pass Hash Table', () => {
  it('should return [0,1] for nums=[2,7,11,15] and target=9 (Example 1)', () => {
    const nums = [2,7,11,15];
    const target = 9;
    
    const expected = [0,1];
    const actual = twoSumTwoPassHash(nums, target);

    assert.deepStrictEqual(actual, expected);
  });

  it('should return [1,2] for nums=[3,2,4] and target=6 (Example 2)', () => {
    const nums = [3,2,4];
    const target = 6;
    
    const expected = [1,2];
    const actual = twoSumTwoPassHash(nums, target);

    assert.deepStrictEqual(actual, expected);
  });

  it('should return [0,1] for nums=[3,3] and target=6 (Example 3)', () => {
    const nums = [3,3];
    const target = 6;
    
    const expected = [0,1];
    const actual = twoSumTwoPassHash(nums, target);

    assert.deepStrictEqual(actual, expected);
  });

  it('should return [1,3] for nums=[2,7,11,15] and target=22', () => {
    const nums = [2,7,11,15];
    const target = 22;
    
    const expected = [1,3];
    const actual = twoSumTwoPassHash(nums, target);

    assert.deepStrictEqual(actual, expected);
  });

  it('should throw an error if a solution does not exist', () => {
    const nums = [1,2,3,4];
    const target = 2;

    assert.throws(
      () => twoSumTwoPassHash(nums, target),
      /^Error: A solution does not exist in the set*/
    );
  })
});
