#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = (symbol) => {
  const randomIndex = generateRandomNumber(0, symbol.length);
  const randomSymbol = symbol[randomIndex];
  return randomSymbol;
};

const calculateOperations = (symbol, firstNumber, secondNumber) => {
  switch (symbol) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomOperator(operators);
  const firstNumber = generateRandomNumber(0, 20);
  const secondNumber = generateRandomNumber(0, 20);

  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const correctAnswer = String(calculateOperations(randomSymbol, firstNumber, secondNumber));

  return [question, correctAnswer];
};
const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
