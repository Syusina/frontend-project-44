#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getTested } from '../index.js';
import generateRandomNumber from '../generator-random.js';

const startRound = (gretting) => {
  let firstNumber = generateRandomNumber();
  let secondNumber = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${firstNumber} ${secondNumber} `).toString();
  console.log(`Your answer: ${userAnswer} `);
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
