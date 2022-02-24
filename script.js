const pixelBoard = document.querySelector('#pixel-board')



for(let i = 0; i < 25; i += 1){
   let pixel = document.createElement('div');
   pixel.className = 'pixel';
   pixelBoard.appendChild(pixel);
}

function selectColorPixel(){
const colorPalette = document.querySelectorAll('.color');
console.log('colorPalette:' + colorPalette);
for(let i = 0; i < colorPalette.length; i += 1){
   console.log('entrei no for');
   colorPalette[i].addEventListener('click', manegerSelected);
   }
}
selectColorPixel();

function manegerSelected(event){
   const selected = document.querySelector('.selected'); 
   console.log('selected: ' + selected);
   selected.classList.remove('selected');
   console.log('select.classList:' + selected.classList);
   event.target.classList.add('selected');
   console.log('event.target.classList:' + event.target.classList);
}


pixelBoard.addEventListener('click', function (event) {           
   const selected = document.querySelector('.selected');
   console.log('selected: ' + selected);
   let getStyleSelected = window.getComputedStyle(selected);
   event.target.style.backgroundColor = getStyleSelected.getPropertyValue('background-color')
})

