const getProductName = (inputString) => {
  const words = inputString.split(',');
  return words[0];
};

const getProductPopularity = (inputString) => {
  const words = inputString.split(',');
  return parseInt(words[1], 10);
};

const fullSortAndCleanup = (inputArray) => inputArray;

export {
  getProductName,
  getProductPopularity,
  fullSortAndCleanup,
};
