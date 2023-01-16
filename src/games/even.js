#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getGreeting, getTested, startGame } from '../index.js';
import generateRandomNumber from '../generator-random.js';

const letsPlay = () => {
  
  const nameGame = 'brain-even\n';
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gretting = getGreeting(nameGame, gameRules);

  const startRound = (gretting) => {
    const numberForQuestion = generateRandomNumber();
    console.log(`Question: ${numberForQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = (numberForQuestion % 2 === 0) ? 'yes' : 'no';
    const result = getTested(userAnswer, correctAnswer, gretting);
    return result;
  };

startGame(startRound, gretting);
};

export default letsPlay;
