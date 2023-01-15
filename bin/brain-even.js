#!/usr/bin/env node
import { getGreeting, startGame } from '../src/index.js';
import startRound from '../src/games/brain-even.js';

const nameGame = 'brain-even';
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const gretting = getGreeting(nameGame, gameRules);

startGame(startRound, gretting);
