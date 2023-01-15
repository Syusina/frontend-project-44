#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getGreeting, getTested, startGame } from '../src/index.js';
import generateRandomNumber from '../src/generator-random.js';

const nameGame = 'brain-progression';
const gameRules = 'What number is missing in the progression?';
const gretting = getGreeting(nameGame, gameRules);

const startRound = () => {
  const allNumbers = [];
  let startNumber = generateRandomNumber();
  const multiplier = generateRandomNumber();
  const quantity = 10;
  let i = 0;
  while (i < quantity) {
    allNumbers.push(startNumber);
    startNumber += multiplier;
    i += 1;
  }
  const passNumber = generateRandomNumber();
  const numbersStr = `${allNumbers.slice(0, passNumber)} .. ${allNumbers.slice(passNumber + 1)}`;
  const numbersArr = numbersStr.split(',');
  const numbersForQuestion = numbersArr.join(' ');
  const userAnswer = readlineSync.question(`Question: ${numbersForQuestion} `).toString();
  console.log(`Your answer: ${userAnswer} `);
  const correctAnswer = allNumbers[passNumber].toString();
  const result = getTested(userAnswer, correctAnswer, gretting);
  return result;
};

startGame(startRound, gretting);
