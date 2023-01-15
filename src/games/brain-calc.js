#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getTested } from '../index.js';
import generateRandomNumber from '../generator-random.js';

const startRound = (gretting) => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const operators = '+*';
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber} `);
  const userAnswer = readlineSync.question('Your answer: ').toString();
  const correctAnswer = (randomOperator === '+') ? (firstNumber + secondNumber).toString() : (firstNumber * secondNumber).toString();
  const result = getTested(userAnswer, correctAnswer, gretting);
  return result;
};

export default startRound;
