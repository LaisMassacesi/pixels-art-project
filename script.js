const pixelBoard = document.querySelector('#pixel-board');
const pixel = document.querySelector('.pixel');

for(let i = 0; i < 25; i += 1){
   let babyDiv = document.createElement('div');
   babyDiv.className = 'pixel';
   pixelBoard.appendChild(babyDiv);
}

