#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getGreeting, getTested, startGame } from '../src/index.js';
import generateRandomNumber from '../src/generator-random.js';

const nameGame = 'brain-even';
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const gretting = getGreeting(nameGame, gameRules);

const startRound = () => {
  const numberForQuestion = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${numberForQuestion} `).toLowerCase();
  console.log(`Your answer: ${userAnswer} `);
  const correctAnswer = (numberForQuestion % 2 === 0) ? 'yes' : 'no';
  const result = getTested(userAnswer, correctAnswer, gretting);
  return result;
};

startGame(startRound, gretting);
