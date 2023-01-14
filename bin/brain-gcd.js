#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getGreeting, getTested, startGame } from '../src/index.js';
import generateRandomNumber from '../src/generator-random.js';

const nameGame = 'brain-gcd';
const gameRules = 'Find the greatest common divisor of given numbers.';
const gretting = getGreeting(nameGame, gameRules);

const startRound = () => {
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

startGame(startRound, gretting);
