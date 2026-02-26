import './_room1.scss';
const room1Container: HTMLDivElement | null = document.querySelector('#room1');

export function initRoom1() {
  console.log('Room 1 initialized');

  if (room1Container) {
    room1Container.classList.remove('hidden');
  }

  const completeRoom1Btn: HTMLButtonElement | null = document.querySelector('#room1-complete');
  completeRoom1Btn?.addEventListener('click', markRoom1Completed);
}

function markRoom1Completed() {
  dispatchEvent(new Event('ROOM_1_COMPLETED'));

  room1Container!.classList.add('hidden');
}
