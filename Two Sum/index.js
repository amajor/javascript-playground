export const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] === target - nums[i]) {
          return [i, j];
      }
    }
  }

  // Throw an error if the solution does not exist.
  throw new Error(`A solution does not exist in the set ${nums} for target ${target}.`);
};
