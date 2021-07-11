const getProductName = (inputString) => {
  const words = inputString.split(',');
  return words[0];
};

const getProductPopularity = (inputString) => {
  const words = inputString.split(',');
  return parseInt(words[1], 10);
};

const getProductPrice = (inputString) => {
  const words = inputString.split(',');
  return parseInt(words[2], 10);
};

const sortByPopularity = (inputArray) => {
  // Sort in decreasing order using the built in sort function.
  inputArray.sort((a, b) => {
    const popularityA = getProductPopularity(a);
    const popularityB = getProductPopularity(b);
    // If (popularityB - popularityA) returns a value > than 0, sort b before a.
    // If (popularityB - popularityA) returns a value ≤ 0, leave a and b in the same order.
    return popularityB - popularityA;
  });
  return inputArray;
};

const fullSortAndCleanup = (inputArray) => inputArray;

export {
  getProductName,
  getProductPopularity,
  getProductPrice,
  sortByPopularity,
  fullSortAndCleanup,
};
