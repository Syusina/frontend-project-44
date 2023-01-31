#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
    if (num < 2) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const numberForQuestion = generateRandomNumber(2, 20);
  const correctAnswer = isPrime(numberForQuestion) ? 'yes' : 'no';
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
