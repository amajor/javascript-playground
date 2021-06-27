const addTwoNumbers = (listOne, listTwo) => {
  // Build first list into an integer
  let stringNumberOne = '';
  listOne.reverse().map((node) => {
    stringNumberOne += `${node}`;
    return true;
  });
  const numberOne = Number.parseInt(stringNumberOne, 10);

  // Build second list into an integer
  let stringNumberTwo = '';
  listTwo.reverse().map((node) => {
    stringNumberTwo += `${node}`;
    return true;
  });
  const numberTwo = Number.parseInt(stringNumberTwo, 10);
  const numberResult = numberOne + numberTwo;
  return `${numberResult}`.split('').reverse().map((node) => +node);
};

export {
  addTwoNumbers,
};
