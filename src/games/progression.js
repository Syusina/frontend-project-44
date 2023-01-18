#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const gameRules = 'What number is missing in the progression?';
const startRound = () => {
  const allNumbers = [];
  let startNumber = generateRandomNumber(1, 10);
  const multiplier = generateRandomNumber(1, 10);
  const quantity = generateRandomNumber(6, 11);
  let i = 0;
  while (i < quantity) {
    allNumbers.push(startNumber);
    startNumber += multiplier;
    i += 1;
  }
  const passNumber = generateRandomNumber(0, quantity);
  const numbersStr = `${allNumbers.slice(0, passNumber)} .. ${allNumbers.slice(passNumber + 1, allNumbers.length - 1)}`;
  const numbersArr = numbersStr.split(',');
  const numberForQuestion = numbersArr.join(' ');
  const correctAnswer = allNumbers[passNumber].toString();
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(gameRules, startRound);

export default letsPlay;