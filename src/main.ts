import './style/style.scss';

import { initIntroScreen } from './intro/intro.ts';
import { initRoom1 } from './room1/room1.ts';
import { initRoom2 } from './room2/room2.ts';
import { initGameOver } from './game-over/gameOver.ts';

function initGame() {
  initIntroScreen();

  window.addEventListener('INTRO_COMPLETE', goToRoom1);
  window.addEventListener('ROOM_1_COMPLETED', goToRoom2);
  window.addEventListener('ROOM_2_COMPLETED', gameOver);
}

function goToRoom1() {
  console.log('go to room 1');
  initRoom1();
}

function goToRoom2() {
  console.log('go to room 2');
  initRoom2();
}

function gameOver() {
  initGameOver();
}

initGame();
