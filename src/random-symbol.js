const getMathExpression = (firstNumber, secondNumber) => {
  const operators = '+*';
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  let numberForQuestion;
  let correctAnswer;

  if (randomOperator === '+') {
    numberForQuestion = `${firstNumber} + ${secondNumber}`;
    correctAnswer = (firstNumber + secondNumber).toString();
  } else {
    numberForQuestion = `${firstNumber} * ${secondNumber}`;
    correctAnswer = (firstNumber * secondNumber).toString();
  }
  return [numberForQuestion, correctAnswer];
};

export default getMathExpression;
