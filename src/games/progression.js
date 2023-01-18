#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const gameRules = 'What number is missing in the progression?';
const startRound = () => {
  const allNumbers = [];
  let startNumber = generateRandomNumber(1, 100);
  const multiplier = generateRandomNumber(1, 100);
  const quantity = 10;
  let i = 0;
  while (i < quantity) {
    allNumbers.push(startNumber);
    startNumber += multiplier;
    i += 1;
  }
  const passNumber = generateRandomNumber(0, 10);
  const numbersStr = `${allNumbers.slice(0, passNumber)} .. ${allNumbers.slice(passNumber + 1, allNumbers.length - 1)}`;
  const numbersArr = numbersStr.split(',');
  const numberForQuestion = numbersArr.join(' ');
  const correctAnswer = allNumbers[passNumber].toString();
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(gameRules, startRound);

export default letsPlay;
