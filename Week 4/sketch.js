let img;
var pallete=[];
let img2;
let img3;
let img4; 
let img5;
let img6;
let img7;
let save = 0;
let save1 = 0; 
//het laden van de afbeeldingen
async function preload() {
   img = await loadImage("eren4.jpg")
   pallete[0] = await loadImage("colour2.jpg")
   pallete[1] = await loadImage("colour.jpg")
   pallete[2] = await loadImage("colour3.jpg")
   pallete[3] = await loadImage("colour4.jpg")
   pallete[4] = await loadImage("colour5.jpg")
   pallete[5] = await loadImage("colour6.jpg")
   
}
//setip om de afbeeldingen goede groote te maken en
//de pixels laden
function setup() {
 createCanvas(700, 500);
 background(255);
  
  img.resize(700, 500);
  // pallete[0].resize(700, 500);
  // pallete[1].resize(700, 500);
  // pallete[2].resize(700, 500);
  // pallete[3].resize(700, 500);
  // pallete[4].resize(700, 500);
  // pallete[5].resize(700, 500);
  // pallete[0].loadPixels();
  // pallete[0].resize(700, 500);
  // img2.resize(700, 500);
  // img3.resize(700, 500);
  // img4.resize(700, 500);
  // img5.resize(700, 500);
  // img6.resize(700, 500);
  // img7.resize(700, 500);
  // img2.loadPixels();
  // img3.loadPixels();
  // img4.loadPixels();
  // img5.loadPixels();
  // img6.loadPixels();
  // img7.loadPixels();

  

}
//loopen
function draw() {
  for(let i = 0; i < 6; i++) {
    pallete[i].resize(700, 500)
    pallete[i].loadPixels()
}

  
 strokeWeight(0);
    for(let i = 0; i <= 100; i++) {
    drawPoint();

  } 
 
}

//het checken de pixels in de eerste afbeelding om starks op plekken te plaatsen
function drawPoint() {
 let x = int(random(img.width));
 let y = int(random(img.height));
 let pix = img.get(x, y);
//de kleuren die worden ge bruikt starks voor de afbeelding
let  value = brightness(pix);
 let i = round( map ( value, 0, 255, 0, (700*500)- 1));
 let arrayPos = i * 4;
 //----
//  let r = pallete[0].pixels[arrayPos]; 
//  let g = pallete[0].pixels[arrayPos + 1]; 
//  let b = pallete[0].pixels[arrayPos + 2];
//  //------ 
//  let r3 = pallete[1].pixels[arrayPos]; 
//  let g3 = pallete[1].pixels[arrayPos + 1]; 
//  let b3 = pallete[1].pixels[arrayPos + 2]; 
//  //----
//  let r4 = pallete[2].pixels[arrayPos]; 
//  let g4 = pallete[2].pixels[arrayPos + 1]; 
//  let b4 = pallete[2].pixels[arrayPos + 2]; 
//  //-----
//  let r5 = pallete[3].pixels[arrayPos]; 
//  let g5 = pallete[3].pixels[arrayPos + 1]; 
//  let b5 = pallete[3].pixels[arrayPos + 2];
//  //----- 
//  let r6 = pallete[4].pixels[arrayPos]; 
//  let g6 = pallete[4].pixels[arrayPos + 1]; 
//  let b6 = pallete[4].pixels[arrayPos + 2];
//  //-----
//  let r7 = pallete[5].pixels[arrayPos]; 
//  let g7 = pallete[5].pixels[arrayPos + 1]; 
//  let b7 = pallete[5].pixels[arrayPos + 2];
 //-----

//  let c7 = color(r7, g7, b7);
//  let c6 = color(r6, g6, b6);
//  let c5 = color(r5, g5, b5);
//  let c4 = color(r4, g4, b4);
//  let c3 = color(r3, g3, b3);
//  let c2 = color(r, g, b);

  //als je spatie clickt neemt een andere kleur over
 strokeWeight(0);
 textSize(12);
  if (keyIsPressed === true){
    if (key === ' ') {
      console.log('HI') 
      k = 1
     let r3 = pallete[k].pixels[arrayPos];
     let g3 = pallete[k].pixels[arrayPos + 1];
     let b3 = pallete[k].pixels[arrayPos + 2];
      let c3 = color(r3, g3, b3)
      fill(c3, 128)
      rect(x, y, random(0, 10), random(0, 10));
      fill(c3, 128)
      text("FREEDOM", x, y);

    }
  }
  else if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
     k = 2
     let r4 = pallete[k].pixels[arrayPos];
     let g4 = pallete[k].pixels[arrayPos + 1];
     let b4 = pallete[k].pixels[arrayPos + 2];
      let c4 = color(r4, g4, b4)
       fill(c4, 128)
      rect(x, y, random(0, 10), random(0, 10));
      fill(c4, 128)
      text("FREEDOM", x, y);
  }  
  else if (mouseX > 600 && mouseX < 700 && mouseY > 0 && mouseY < 100) {
     k = 3 
     let r5 = pallete[k].pixels[arrayPos];
     let g5 = pallete[k].pixels[arrayPos + 1];
     let b5 = pallete[k].pixels[arrayPos + 2];
      let c5 = color(r5, g5, b5)
    fill(c5, 128)
      rect(x, y, random(0, 10), random(0, 10));
      fill(c5, 128)
      text("FREEDOM", x, y);
  }  
  else if (mouseX > 600 && mouseX < 700 && mouseY > 400 && mouseY < 500) {
     k = 4 
     let r6 = pallete[k].pixels[arrayPos];
     let g6 = pallete[k].pixels[arrayPos + 1];
     let b6 = pallete[k].pixels[arrayPos + 2];
      let c6 = color(r6, g6, b6) 
    fill(c6, 128)
      rect(x, y, random(0, 10), random(0, 10));
      fill(c6, 128)
      text("FREEDOM", x, y);
  }  
  else if (mouseX > 0 && mouseX < 100 && mouseY > 400 && mouseY < 500) {
     k = 5
     let r7 = pallete[k].pixels[arrayPos];
     let g7 = pallete[k].pixels[arrayPos + 1];
     let b7 = pallete[k].pixels[arrayPos + 2];
      let c7 = color(r7, g7, b7)  
     fill(c7, 128)
      rect(x, y, random(0, 10), random(0, 10));
      fill(c7, 128)
      text("FREEDOM", x, y);
  }  
  
  else{
    k = save
    let r = pallete[k].pixels[arrayPos];
    let g = pallete[k].pixels[arrayPos + 1];
    let b = pallete[k].pixels[arrayPos + 2];
    let c2 = color(r, g, b);
  fill(c2, 128)
  rect(x, y, random(0, 10), random(0, 10));
  fill(c2, 128)
  text("FREEDOM", x, y);
  }
  //als mouse links boven in is verandert hij van kluer
  fill(100)
  strokeWeight(2)
  rect(110, 20, 100 , 40);
  rect(110, 65, 100, 40);
  fill(0);
  textSize(20);
  text("save = S", 125, 45);
  text("load = L", 125, 90);
  
    if(keyIsPressed === true) {
      if(key === 's') {
         save1 = k;
        console.log(save)
         fill(200)
         rect(110, 20, 100 , 40);
         fill(100);
         text("save", 140, 45);
      }
      if(key === 'l') {
        save = save1
        fill(200)
        rect(110, 65, 100, 40);
        fill(100);
        text("load = L", 125, 90);
      }
    
    
   
  }
}

