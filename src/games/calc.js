#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';
import getMathExpression from '../random-symbol.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const questionAndAnswer = getMathExpression(firstNumber, secondNumber);
  return questionAndAnswer;
};
const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
