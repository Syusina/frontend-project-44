#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const startRound = () => {
  const numberForQuestion = generateRandomNumber(1, 100);
  const correctAnswer = (numberForQuestion % 2 === 0) ? 'yes' : 'no';
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(gameRules, startRound);

export default letsPlay;
