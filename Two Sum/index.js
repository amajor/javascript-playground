export const twoSum = (nums, target) => {
  let indexOne = 0;
  let indexTwo = 1;
  
  for (let i = indexTwo; i < nums.length; i += 1) {
    const valueOne = nums[indexOne];
    const valueTwo = nums[indexTwo];

    if (valueOne + valueTwo === target) {
      indexTwo = i;
      break;
    } else if (i === nums.length - 1 && indexOne !== nums.length - 2) {
      i = indexTwo;
      indexOne = indexTwo;
      indexTwo += 1;
    }
}

  return [indexOne, indexTwo];
};
