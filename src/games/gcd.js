#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const nameGame = 'brain-gcd\n';
const gameRules = 'Find the greatest common divisor of given numbers.';

const startRound = () => {
  let firstNumber = generateRandomNumber();
  let secondNumber = generateRandomNumber();
  const numberForQuestion = `${firstNumber} ${secondNumber}`;

  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  const correctAnswer = firstNumber.toString();
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(nameGame, gameRules, startRound);

export default letsPlay;
