#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const nameGame = 'brain-progression\n';
const gameRules = 'What number is missing in the progression?';
const startRound = () => {
  const allNumbers = [];
  let startNumber = generateRandomNumber();
  const multiplier = generateRandomNumber();
  const quantity = 10;
  let i = 0;
  while (i < quantity) {
    allNumbers.push(startNumber);
    startNumber += multiplier;
    i += 1;
  }
  const getRandomInt = (minNum, maxNum) => {
    const min = Math.ceil(minNum);
    const max = Math.floor(maxNum);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const passNumber = getRandomInt(0, 10);
  const numbersStr = `${allNumbers.slice(0, passNumber)} .. ${allNumbers.slice(passNumber + 1, allNumbers.length - 1)}`;
  const numbersArr = numbersStr.split(',');
  const numberForQuestion = numbersArr.join(' ');
  const correctAnswer = allNumbers[passNumber].toString();
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(nameGame, gameRules, startRound);

export default letsPlay;
