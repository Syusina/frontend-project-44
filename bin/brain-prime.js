#!/usr/bin/env node
import { getGreeting, startGame } from '../src/index.js';
import startRound from '../src/games/for-brain-prime.js';

const nameGame = 'brain-prime';
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gretting = getGreeting(nameGame, gameRules);

startGame(startRound, gretting);
