#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNumber, step, length) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    progression.push(startNumber + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const startNumber = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 10);
  const length = generateRandomNumber(5, 10);

  const progression = getProgression(startNumber, step, length);
  const passIndex = generateRandomNumber(0, length);

  const correctAnswer = String(progression[passIndex]);
  progression[passIndex] = '..';
  const numberForQuestion = progression.join(' ');
  return [numberForQuestion, correctAnswer];
};

const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
