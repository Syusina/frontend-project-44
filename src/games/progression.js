#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const description = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const num1 = generateRandomNumber(1, 10);
  const progressionStep = generateRandomNumber(1, 10);
  const progressionLength = generateRandomNumber(5, 10);

  const getProgression = (startNumber, step, length) => {
    const allNumbers = [];
    let num = startNumber;
    for (let i = 0; i <= length; i += 1) {
      allNumbers.push(num);
      num += step;
    }
    return allNumbers;
  };

  const progression = getProgression(num1, progressionStep, progressionLength);
  const passIndex = generateRandomNumber(0, progressionLength);
  const passNumber = progression[passIndex];
  progression[passIndex] = '..';
  const numberForQuestion = progression.join(' ');
  const correctAnswer = passNumber.toString();
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
