import readlineSync from 'readline-sync';

export const getGreeting = (nameGame, gameRules) => {
  console.log(`${nameGame}\nWelcome to the Brain Games!`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log(gameRules);
  return userName;
};

export const startRound = (isNumberEven) => {
  const userAnswer = readlineSync.question(`Question: ${isNumberEven} `).toLowerCase();
  console.log(`Your answer: ${userAnswer} `);
  return userAnswer;
};

export const getTested = (userAnswer, correctAnswer, userName) => {
  let result;
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    result = false;
  }
  return result;
};

export const startGame = (start, userName) => {
  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = start();
    if (!rightAnswer) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
