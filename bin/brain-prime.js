#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getGreeting, getTested, startGame } from '../src/index.js';
import generateRandomNumber from '../src/generator-random.js';
import isPrime from '../src/isPrime.js';

const nameGame = 'brain-prime';
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gretting = getGreeting(nameGame, gameRules);

const startRound = () => {
  const numberForQuestion = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${numberForQuestion} `).toLowerCase();
  console.log(`Your answer: ${userAnswer} `);
  const correctAnswer = (isPrime(numberForQuestion)) ? 'yes' : 'no';
  const result = getTested(userAnswer, correctAnswer, gretting);
  return result;
};

startGame(startRound, gretting);
