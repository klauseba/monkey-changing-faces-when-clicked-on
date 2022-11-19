const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// add event listener

closedFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});

openFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.remove('active');
    closedFace.classList.add('active');
  }
});
