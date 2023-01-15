#!/usr/bin/env node
import { getGreeting, startGame } from '../src/index.js';
import startRound from '../src/games/for-brain-progression.js';

const nameGame = 'brain-progression';
const gameRules = 'What number is missing in the progression?';
const gretting = getGreeting(nameGame, gameRules);

startGame(startRound, gretting);
