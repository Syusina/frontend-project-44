#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getTested } from '../index.js';
import generateRandomNumber from '../generator-random.js';

export const nameGame = 'brain-even\n';
export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRound = (gretting) => {
  const numberForQuestion = generateRandomNumber();
  console.log(`Question: ${numberForQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = (numberForQuestion % 2 === 0) ? 'yes' : 'no';
  const result = getTested(userAnswer, correctAnswer, gretting);
  return result;
};

export default startRound;
