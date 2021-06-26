export const twoSum = (nums, target) => {
  let indexOne = 0;
  let indexTwo = 1;
  
  for (let i = indexTwo; i < nums.length; i += 1) {
    
    const valueOne = nums[indexOne];
    const valueTwo = nums[i];

    if (valueOne + valueTwo === target) {
      indexTwo = i;
      return [indexOne, indexTwo];
    } else if (i === nums.length - 1 && indexOne !== nums.length - 2) {
      i = indexTwo;
      indexOne = indexTwo;
      indexTwo += 1;
      continue;
    }
  }

  // Throw an error if the solution does not exist.
  throw new Error(`A solution does not exist in the set ${nums} for target ${target}.`);
};
