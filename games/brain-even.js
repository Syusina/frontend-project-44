import readlineSync from 'readline-sync';
import { greeting, examination } from '../src/index.js';
import generateRandomNumber from '../src/generator-random.js';

const nameGame = 'brain-even';
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const greetUser = greeting(nameGame, gameRules);

const startRound = () => {
  const numberForQuestion = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${numberForQuestion} `).toLowerCase();
  console.log(`Your answer: ${userAnswer} `);
  const correctAnswer = (numberForQuestion % 2 === 0) ? 'yes' : 'no';
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
