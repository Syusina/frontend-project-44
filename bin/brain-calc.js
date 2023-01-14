#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getGreeting, getTested, startGame } from '../src/index.js';
import generateRandomNumber from '../src/generator-random.js';

const nameGame = 'brain-calc';
const gameRules = 'What is the result of the expression?';
const gretting = getGreeting(nameGame, gameRules);

const startRound = () => {
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

startGame(startRound, gretting);
