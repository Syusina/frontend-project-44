#!/usr/bin/env node
import { getGreeting, startGame } from '../src/index.js';
import startRound from '../src/games/gcd.js';

const nameGame = 'brain-gcd\n';
const gameRules = 'Find the greatest common divisor of given numbers.';
const gretting = getGreeting(nameGame, gameRules);

startGame(startRound, gretting);
