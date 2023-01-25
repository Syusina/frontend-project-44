#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const operand1 = generateRandomNumber(1, 100);
  const operand2 = generateRandomNumber(1, 100);
  const numberForQuestion = `${operand1} ${operand2}`;

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

  const correctAnswer = getDivider(operand1, operand2).toString();
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
