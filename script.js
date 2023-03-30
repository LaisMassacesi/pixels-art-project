const pixelBoard = document.querySelector('#pixel-board');

function generatePixelBoard() {
  for (let i = 0; i < 30; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
generatePixelBoard();

function manegerSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

function selectColorPixel() {
  const colorPalette = document.querySelectorAll('.color');
  for (let i = 0; i < colorPalette.length; i += 1) {
    console.log('entrei no for');
    colorPalette[i].addEventListener('click', manegerSelected);
  }
}
selectColorPixel();

pixelBoard.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  const getStyleSelected = window.getComputedStyle(selected);
  event.target.style.backgroundColor = getStyleSelected.getPropertyValue('background-color');
});
