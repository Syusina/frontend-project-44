#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const numberForQuestion = generateRandomNumber(1, 20);

  const isPrime = (number) => {
    const num = number;
    const checkPrime = () => {
      if (num < 2) {
        return false;
      }
      let divider = 2;
      while (divider <= num / 2) {
        if (num % divider === 0) {
          return false;
        }
        divider += 1;
      }
      return true;
    };
    const correctAnswer = checkPrime(num) ? 'yes' : 'no';
    return correctAnswer;
  };

  const correctAnswer = isPrime(numberForQuestion);
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
