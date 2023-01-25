#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const numberForQuestion = generateRandomNumber(1, 100);

  const isEven = (num) => {
    let result;
    if (num % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };

  const correctAnswer = isEven(numberForQuestion);
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
