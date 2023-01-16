#!/usr/bin/env node
import readlineSync from 'readline-sync';
import generateRandomNumber from '../src/generator-random';

const nameGame = 'brain-even\n';
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(`${nameGame}\nWelcome to the Brain Games!`);
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\n${gameRules}`);

for (let i = 0; i < 3; i += 1) {
    const numberForQuestion = generateRandomNumber();
    console.log(`Question: ${numberForQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = (numberForQuestion % 2 === 0) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      result = false;
    }
      if (!rightAnswer) {
       break;
      }
    }
    console.log(`Congratulations, ${userName}!`);
