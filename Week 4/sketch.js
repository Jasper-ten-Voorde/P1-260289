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
      fill(c);
      rect(i,j, 10, 10);
    }
  }

 
}


function draw() { 
  // tint(255, 127)
  //  image(img, 0, 0, img.width / 4.80, img.height / 4.80)
}