const startGameBtn: HTMLButtonElement | null = document.querySelector('#start-game');

export function initIntroScreen() {
  if (startGameBtn) {
    startGameBtn.addEventListener('click', markIntroScreenAsCompleted);
  }
}

export function hideIntroScreen() {
  startGameBtn!.classList.add('hidden');
}
function markIntroScreenAsCompleted() {
  dispatchEvent(new Event('INTRO_COMPLETE'));

  hideIntroScreen();
}
