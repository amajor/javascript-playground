import assert from 'assert';
import { twoSum } from './index.js';

describe('Two Sum', () => {
  
  it('should return [0,1] for nums=[2,7,11,15] and target=9 (Example 1)');

  it('should return [1,2] for nums=[3,2,4] and target=6 (Example 2)');

  it('should return [0,1] for nums=[3,3] and target=6 (Example 3)', () => {
    const nums = [3,3];
    const target = 6;
    
    const expected = [0,1];
    const actual = twoSum(nums, target);

    assert.deepStrictEqual(actual, expected);
  });

});
