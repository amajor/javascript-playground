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

const compareProductByPrice = (productStringA, productStringB) => {
  const priceA = getProductPrice(productStringA);
  const priceB = getProductPrice(productStringB);
  // If (priceA - priceB) returns a value > than 0, sort b before a.
  // If (priceA - priceB) returns a value ≤ 0, leave a and b in the same order.
  return priceA - priceB;
};

const sortByPopularityAndPrice = (inputArray) => {
  // Sort in decreasing order using the built in sort function.
  inputArray.sort((a, b) => {
    const popularityA = getProductPopularity(a);
    const popularityB = getProductPopularity(b);
    const comparedValue = popularityB - popularityA;

    // If comparedValue === 0, sort by price.
    if (comparedValue === 0) return compareProductByPrice(a, b);

    // If comparedValue > 0, sort b before a.
    // If comparedValue < 0, leave a and b in the same order.
    return comparedValue;
  });
  return inputArray;
};

const cleanArrayToOnlyNames = (inputArray) => {
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i += 1) {
    outputArray.push(getProductName(inputArray[i]));
  }
  return outputArray;
};

const fullSortAndCleanup = (inputArray) => {
  const sortedArray = sortByPopularityAndPrice(inputArray);
  return cleanArrayToOnlyNames(sortedArray);
};

export {
  getProductName,
  getProductPopularity,
  getProductPrice,
  compareProductByPrice,
  sortByPopularityAndPrice,
  cleanArrayToOnlyNames,
  fullSortAndCleanup,
};
