#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';
import isPrime from '../isPrime.js';

const nameGame = 'brain-prime\n';
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startRound = () => {
  const numberForQuestion = generateRandomNumber();
  const correctAnswer = (isPrime(numberForQuestion)) ? 'yes' : 'no';
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(nameGame, gameRules, startRound);

export default letsPlay;
