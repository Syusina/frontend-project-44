#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const nameGame = 'brain-calc\n';
const gameRules = 'What is the result of the expression?';

const startRound = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const operators = '+*';
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  const numberForQuestion = `${firstNumber} ${randomOperator} ${secondNumber}`;

  const correctAnswer = (randomOperator === '+') ? (firstNumber + secondNumber).toString() : (firstNumber * secondNumber).toString();
  return [numberForQuestion, correctAnswer];
};
const letsPlay = () => startGame(nameGame, gameRules, startRound);

export default letsPlay;
