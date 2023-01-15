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
  const userAnswer = readlineSync.question(`Question: ${firstNumber} ${randomOperator} ${secondNumber}? `).toString();
  console.log(`Your answer: ${userAnswer} `);
  const correctAnswer = (randomOperator === '+') ? (firstNumber + secondNumber).toString() : (firstNumber * secondNumber).toString();
  const result = getTested(userAnswer, correctAnswer, gretting);
  return result;
};

export default startRound;
