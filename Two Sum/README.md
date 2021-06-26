# Two Sum

_[Original Problem from Leet Code](https://leetcode.com/problems/two-sum/)._

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

## Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints:

```
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
```

## Follow-Up

Can you come up with an algorithm that is less than O(n2) time complexity?

# Explanations

## Approach 1: Brute Force

The brute force approach is straight-forward and a natural initial solution.

Loop through each element `x` and find if there is another value equal to `target - x`.

If there is, return those two values.

### Complexity Analysis

Time complexity: `O(n^2)`

For each element, we try to find its complement by looping through the rest of array which takes `O(n)` time. Therefore, the time complexity is `O(n^2)`.

Space complexity: `O(1)`.
