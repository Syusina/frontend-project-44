import readlineSync from 'readline-sync';
import { greeting, examination } from '../src/index.js';
import generateRandomNumber from '../src/generator-random.js';

const nameGame = 'brain-calc';
const gameRules = 'What is the result of the expression?';
const greetUser = greeting(nameGame, gameRules);

const startRound = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const operator = '+*';
  const randomIndex = Math.floor(Math.random() * operator.length);
  const randomOperator = operator[randomIndex];
  const userAnswer = readlineSync.question(`Question: ${firstNumber} ${randomOperator} ${secondNumber}? `).toString();
  console.log(`Your answer: ${userAnswer} `);
  const correctAnswer = (randomOperator === '+') ? (firstNumber + secondNumber).toString() : (firstNumber * secondNumber).toString();
  const result = examination(userAnswer, correctAnswer, greetUser);
  return result;
};

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = startRound();
    if (!rightAnswer) {
      return;
    }
  }
  console.log(`Congratulations, ${greetUser}!`);
};
startGame();
