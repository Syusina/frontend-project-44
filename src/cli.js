import readlineSync from 'readline-sync';

const getGreeting = (nameGame) => {
  console.log(`${nameGame}\nWelcome to the Brain Games!`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default getGreeting;