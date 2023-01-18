#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startRound = () => {
  const numberForQuestion = generateRandomNumber(1, 20);
  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }
    let divider = 2;
    while (divider <= number / 2) {
      if (number % divider === 0) {
        return false;
      }
      divider += 1;
    }
    return true;
  };
  const correctAnswer = (isPrime(numberForQuestion)) ? 'yes' : 'no';
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(gameRules, startRound);

export default letsPlay;
