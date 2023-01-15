#!/usr/bin/env node
import { getGreeting, startGame } from '../src/index.js';
import startRound from '../src/games/for-brain-gcd.js';

const nameGame = 'brain-gcd';
const gameRules = 'Find the greatest common divisor of given numbers.';
const gretting = getGreeting(nameGame, gameRules);

startGame(startRound, gretting);
