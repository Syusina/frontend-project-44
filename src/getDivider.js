const getDivider = (firstNumber, secondNumber) => {
  let num1 = firstNumber;
  let num2 = secondNumber;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

export default getDivider;
