#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getTested } from '../index.js';
import generateRandomNumber from '../generator-random.js';

const startRound = (gretting) => {
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
  const passNumber = generateRandomNumber();
  const numbersStr = `${allNumbers.slice(0, passNumber)} .. ${allNumbers.slice(passNumber + 1)}`;
  const numbersArr = numbersStr.split(',');
  const numbersForQuestion = numbersArr.join(' ');
  const userAnswer = readlineSync.question(`Question: ${numbersForQuestion} `).toString();
  console.log(`Your answer: ${userAnswer} `);
  const correctAnswer = allNumbers[passNumber].toString();
  const result = getTested(userAnswer, correctAnswer, gretting);
  return result;
};

export default startRound;
