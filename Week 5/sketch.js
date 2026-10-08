let bakimg;
let names = ["START", "A", "B", "C", "D", "Next"];
let funcs = [start, Abutton, Bbutton, Cbutton, Dbutton, next]
let buttons = []
let buttonstyles = {
   posX: [300, 220, 480, 220, 480, 520],
   posY: [265, 350, 350, 455, 455, 315],
   breed: [200, 100, 100, 100, 100, 60],
   hoog: [70, 35, 35, 35, 35, 30],
   pixls: ['36px', '30px', '30px', '30px', '30px', "10px"]

}
//dont join the verity roleplay extreme
let currentBg = "black"
let vraag = {
      vragen: [
         "Wie staat er op schaak?", 
         "2",
         "3",
         "4",
         "5",
         "6",
         "7",
         "8",
         "9",
         "10",
              ],
      ant: [
         "Wit", "Zwart", "niemand", "allebei",
         "2.1", "2.2", "2.3", "2.4",
         "3.1", "3.2", "3.3", "3.4",
         "4.1", "4.2", "4.3", "4.4",
         "5.1", "5.2", "5.3", "5.4",
         "6.1", "6.2", "6.3", "6.4",
         "7.1", "7.2", "7.3", "7.4",
         "8.1", "8.2", "8.3", "8.4",
         "9.1", "9.2", "9.3", "9.4",
         "10.1", "10.2", "10.3", "10.4"
      ], 
      aPosX: [250, 510, 250, 510],     
      aPosY: [400, 400, 505, 505],  
      score: 0,
      lvl: -1,
      afbeeld: []
    }
function preload() {
 bakimg = loadImage("background.png")
 img = [loadImage("shaaknorm.png")]
 
}

function setup() {
   
   createCanvas(800, 600);
    


   for(let i = 0; i < names.length; i++) { 
   let button = createButton(names[i]);
	button.style('background-color', "grey");
	button.mousePressed(funcs[i]);
   buttons.push(button);
   button.position(buttonstyles.posX[i], buttonstyles.posY[i]);
   button.size(buttonstyles.breed[i], buttonstyles.hoog[i]);
   button.style('font-size', buttonstyles.pixls[i]);
    if(i >= 1) {
      button.hide();
    }
    
   }
}

function start() {
 buttons[0].hide();
 buttons[1].show();
 buttons[2].show();
 buttons[3].show();
 buttons[4].show();
 vraag.lvl += 1

}
function Abutton() {
   
if(vraag.lvl === 0) {
   currentBg = "green"
   vraag.score += 1
   buttons[5].show();
   vraag.lvl +=1
 }
else if(vraag.lvl === 2) {
   currentBg = "red"
   buttons[5].show();
   vraag.lvl +=1
 }
 
}
function Bbutton() {
 if(vraag.lvl === 0) {
   currentBg = "red"
   buttons[5].show();
 }
 else if(vraag.lvl === 2) {
   currentBg = "red"
   buttons[5].show();
   vraag.lvl +=1
 }
 
}
function Cbutton() {
if(vraag.lvl === 0) {
   currentBg = "red"
   buttons[5].show();
   vraag.lvl +=1
 }
 else if(vraag.lvl === 2) {
   currentBg = "green"
   buttons[5].show();
   vraag.score += 1
   vraag.lvl +=1
 }

}

function Dbutton() {
 if(vraag.lvl === 0) {
   currentBg = "red"
   buttons[5].show();
   vraag.lvl +=1
 }
 else if(vraag.lvl === 2) {
   currentBg = "red"
   buttons[5].show();
   vraag.lvl +=1
 }
 
}

function next() {
  vraag.lvl += 1
  currentBg = "black"
  buttons[5].hide()
}

function draw() {
   background(currentBg);
   bakimg.resize(600, 600);
   tint(255, 127);
   image(bakimg, 100, 0,);
   text(vraag.score, 200, 100);
   if(vraag.lvl === 0) {
      textSize(30);
      fill("grey")
      rect(220, 70, 340, 50);
      fill(0)
      text(vraag.vragen[0], 230, 100)
      text(vraag.ant[0], 240, 400);
      text(vraag.ant[1], 510, 400);
      text(vraag.ant[2], 220, 505);
      text(vraag.ant[3], 510, 505);
      tint(255, 254)
      image(img[0], 300, 130, 200, 200);
   }
   
}


