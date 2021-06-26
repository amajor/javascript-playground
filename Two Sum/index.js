const twoSum = (nums, target) => {
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

const twoSumTwoPassHash = (nums, target) => {
  let map = new Map();

  // First iteration, setting the values to the hash table
  for (let i = 0; i < nums.length; i += 1) {
    map.set(nums[i], i);
  }

  // Second iteration, checking for the complement
  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  // Throw an error if the solution does not exist.
  throw new Error(`A solution does not exist in the set ${nums} for target ${target}.`);
};

export {
  twoSum,
  twoSumTwoPassHash,
}
