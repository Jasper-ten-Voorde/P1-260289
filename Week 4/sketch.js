let img;
function preload() {
   img = loadImage("themoon.jpg")
}


function setup() {
 
 
  
  img.resize(700, 500);
  createCanvas(img.width, img.height);
  image(img, 0 ,0);
   
  img.loadPixels();
  noStroke();
  for(let i = 0; i < img.width; i++) {
    for(let j = 0; j <img.height; j++){
      let c = img.get(i, j)
      fill(c)
      // if(c < 50 ) {
      //   rect(i,j, 10, 10);
      // }
      rect(i,j, 10, 10);
    }
  }

 
}


function draw() { 
  
 
}