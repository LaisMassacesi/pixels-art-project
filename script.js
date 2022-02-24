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

function manegerSelected(event){
   const selected = document.querySelector('.selected'); 
   console.log('selected: ' + selected);
   selected.classList.remove('selected');
   console.log('select.classList:' + selected.classList);
   event.target.classList.add('selected');
   console.log('event.target.classList:' + event.target.classList);
   // let color = window.getComputedStyle(event.target);
   // event.target.style.backgroundColor(selected);
}


   
   //função que adiciona a classe color ao pixel clicado
function  selectPixel(event){
   const selected = document.querySelector('.selected');
   const color = selected.style.backgroundColor;
   console.log('color: ' + color)
   event.target.classList.add('color')
}

pixelBoard.addEventListener('click', function (event) {           
   const selected = document.querySelector('.selected');
   console.log('selected: ' + selected);
   let cor = window.getComputedStyle(selected);
   event.target.style.backgroundColor = cor.getPropertyValue('background-color')
})













// function paint (event){
//    const pixelBoard = document.querySelectorAll('#pixel-board')
//    pixelBoard.addEventListener('click', function(){
//    const cor = window.getComputedStyle(selectedItemColor);
//    event.target.style.backgroundColor = selectedItemColor.getPropertyValue('background-color'); 
//    })
// }


















// function getColor (event){
//    const selectPixel = event;
//    for(let i = 0; i < pixels; i += 1){
//    if(pixels[i].className === 'selected'){
//       pixels[i].className = 'color'
//    }
//  }
//  getColor.target.className = 'selected'
// }



// black.style.backgroundColor = "black";

// window.onload = function(){
// document.querySelector('.color').classList.add('selected')
// };




// function blackPixel (){
//       const black = document.querySelector('.black')
//          pixel.classList.add(black)
// }
// blackPixel()




// function selectBlack (event){

//       if(selected){
//         selected.classList.remove('selected');
//       }
//       event.target.classList.add('selected');
// }



// const selectColor = document.getElementsByClassName('selected');
//    black.classList.add('selected');
//    black.style.backgroundColor = "black";
//    for(let i in selectColor){
//       if(selectColor[i] !== black){
//          selectColor[i].classList.remove('selected');
//       }
//    }



// function blackPixel (){
//    const selected = document.querySelector('.selected')
//    const black = document.querySelector('.black')
//    if(black){
//               selected.target.classList.remove('.black');
//             }
//             selected.target.classList.add('.black');
// }
// blackPixel()