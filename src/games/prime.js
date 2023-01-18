#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startRound = () => {
  const numberForQuestion = generateRandomNumber();
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    } else if (num === 2) {
        for (let i = 2; i < num; i += 1) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
    }
  };
  const correctAnswer = (isPrime(numberForQuestion)) ? 'yes' : 'no';
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(gameRules, startRound);

export default letsPlay;
