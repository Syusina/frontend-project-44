#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const gameRules = 'What number is missing in the progression?';
const startRound = () => {
  const allNumbers = [];
  let startNumber = generateRandomNumber(1, 10);
  const multiplier = generateRandomNumber(1, 10);
  const quantity = generateRandomNumber(5, 10);
  let i = 0;
  while (i <= quantity) {
    allNumbers.push(startNumber);
    startNumber += multiplier;
    i += 1;
  }
  const passNumber = generateRandomNumber(0, quantity);
  const a = allNumbers[passNumber];
  allNumbers[passNumber] = '..';
  const numberForQuestion = allNumbers.join(' ');
  const correctAnswer = a.toString();
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(gameRules, startRound);

export default letsPlay;