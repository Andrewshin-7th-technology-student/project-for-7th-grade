import Game from './js/game.js';
import Player from './js/player.js';
import Obstacles from './js/obstacles.js';
import PowerUps from './js/powerups.js';
import Enemies from './js/enemies.js';
import Audio from './js/audio.js';

const game = new Game();
const player = new Player();
const obstacles = new Obstacles();
const powerUps = new PowerUps();
const enemies = new Enemies();
const audio = new Audio();

game.init();
player.init();
obstacles.init();
powerUps.init();
enemies.init();
audio.init();

game.start();
