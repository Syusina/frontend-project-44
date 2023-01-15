#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getTested } from '../index.js';
import generateRandomNumber from '../generator-random.js';

const startRound = (gretting) => {
  let firstNumber = generateRandomNumber();
  let secondNumber = generateRandomNumber();
  console.log(`Question: ${firstNumber} ${secondNumber} `);
  const userAnswer = readlineSync.question('Your answer: ').toString();
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  const correctAnswer = firstNumber.toString();
  const result = getTested(userAnswer, correctAnswer, gretting);
  return result;
};

export default startRound;
