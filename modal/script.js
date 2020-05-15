const modal = document.querySelector('.modal-overlay');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open-modal');
});
