#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);

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

  const questionAndAnswer = getMathExpression(num1, num2);
  return questionAndAnswer;
};
const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
