#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const description = 'Find the greatest common divisor of given numbers.';

const getDivider = (num1, num2) => {
  let firstNumber = num1;
  let secondNumber = num2;
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  return firstNumber;
};

const getQuestionAndAnswer = () => {
  const operand1 = generateRandomNumber(1, 100);
  const operand2 = generateRandomNumber(1, 100);
  const numberForQuestion = `${operand1} ${operand2}`;
  const correctAnswer = getDivider(operand1, operand2).toString();
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
