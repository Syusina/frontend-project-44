import readlineSync from 'readline-sync';

console.log('brain-even');
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no". ');

const generateRandomNumber = () => Math.round(Math.random() * 10);

const startRound = () => {
  const numberForQuestion = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${numberForQuestion} `).toLowerCase();
  console.log(`Your answer: ${userAnswer} `);
  let result;

  if (numberForQuestion % 2 === 0 && userAnswer === 'yes') {
    console.log('Correct!');
    result = true;
  } else if (numberForQuestion % 2 !== 0 && userAnswer === 'no') {
    console.log('Correct!');
    result = true;
  } else if (numberForQuestion % 2 === 0 && userAnswer !== 'yes') {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
    result = false;
  } else if (numberForQuestion % 2 !== 0 && userAnswer !== 'no') {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
    result = false;
  }
  return result;
};

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = startRound();
    if (!rightAnswer) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
startGame();
