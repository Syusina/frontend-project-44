#!/usr/bin/env node
import { getGreeting, startGame } from '../src/index.js';
import startRound from '../src/games/for-brain-calc.js';

const nameGame = 'brain-calc';
const gameRules = 'What is the result of the expression?';
const gretting = getGreeting(nameGame, gameRules);

startGame(startRound, gretting);
