#!/usr/bin/env node
import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const startGame = (description, startRound) => {
// приветствие
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${description}`);

  // начало раунда
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [numberForQuestion, correctAnswer] = startRound();
    console.log(`Question: ${numberForQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    // проверка ответа
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
