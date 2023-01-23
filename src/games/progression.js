#!/usr/bin/env node
import startGame from '../index.js';
import generateRandomNumber from '../generator-random.js';
import getProgression from '../getProgression.js';
import getPassNumber from '../passNumber.js';

const description = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const startNumber = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 10);
  const length = generateRandomNumber(5, 10);
  const progression = getProgression(startNumber, step, length);
  const passIndex = generateRandomNumber(0, length);
  const questionAndAnswer = getPassNumber(progression, passIndex);
  return questionAndAnswer;
};

const letsPlay = () => startGame(description, getQuestionAndAnswer);

export default letsPlay;
