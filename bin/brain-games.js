#!/usr/bin/env node

import getGreeting from '../src/cli.js';

const nameGame = 'brain-games';
const gameRules = 'What is the result of the expression?';
const gretting = getGreeting(nameGame, gameRules);
