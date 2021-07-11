const getProductName = (inputString) => {
  const words = inputString.split(',');
  return words[0];
};

const fullSortAndCleanup = (inputArray) => {
  return inputArray;
};

export {
  getProductName,
  fullSortAndCleanup,
};
