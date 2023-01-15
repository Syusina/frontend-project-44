#!/usr/bin/env node
import { getGreeting, startGame } from '../src/index.js';
import startRound from '../src/games/calc.js';

const nameGame = 'brain-calc\n';
const gameRules = 'What is the result of the expression?';
const gretting = getGreeting(nameGame, gameRules);

startGame(startRound, gretting);
