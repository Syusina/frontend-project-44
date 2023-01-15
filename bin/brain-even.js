#!/usr/bin/env node
import { getGreeting, startGame } from '../src/index.js';
import startRound, { nameGame, gameRules } from '../src/games/even.js';

const gretting = getGreeting(nameGame, gameRules);
startGame(startRound, gretting);
