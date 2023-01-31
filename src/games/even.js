#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getQuestionAndAnswer = () => {
  const numberForQuestion = generateRandomNumber(1, 100);
  const correctAnswer = isEven(numberForQuestion) ? 'yes' : 'no';
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
