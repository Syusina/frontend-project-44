#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';
import getDivider from '../getDivider.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const numberForQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getDivider(firstNumber, secondNumber).toString();
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
