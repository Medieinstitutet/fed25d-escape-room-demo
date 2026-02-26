const gameOverContainer: HTMLDivElement | null = document.querySelector('#game-over');

export function initGameOver() {
  console.log('Game over initialized');

  if (gameOverContainer) {
    gameOverContainer.classList.remove('hidden');
  }
}
