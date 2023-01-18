#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const nameGame = 'brain-even\n';
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const startRound = () => {
  const numberForQuestion = generateRandomNumber();
  const correctAnswer = (numberForQuestion % 2 === 0) ? 'yes' : 'no';
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(nameGame, gameRules, startRound);

export default letsPlay;
