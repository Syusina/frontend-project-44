#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getTested } from '../index.js';
import generateRandomNumber from '../generator-random.js';

const startRound = (gretting) => {
  const numberForQuestion = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${numberForQuestion} `).toLowerCase();
  console.log(`Your answer: ${userAnswer} `);
  const correctAnswer = (numberForQuestion % 2 === 0) ? 'yes' : 'no';
  const result = getTested(userAnswer, correctAnswer, gretting);
  return result;
};

export default startRound;