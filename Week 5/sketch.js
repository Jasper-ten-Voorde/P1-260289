let bakimg;
let names = ["START", "A", "B", "C", "D"];
let funcs = [start, Abutton, Bbutton, Cbutton, Dbutton]
let buttons = []
let buttonstyles = {
   posX: [300, 220, 480, 220, 480],
   posY: [265, 230, 230, 335, 335],
   breed: [200, 100, 100, 100, 100],
   hoog: [70, 35, 35, 35, 35],
   pixls: ['36px', '30px', '30px', '30px', '30px']

}
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
         "1.1", "1.2", "1.3", "1.4",
         "2.1", "2.2", "2.3", "2.4",
         "3.1", "3.2", "3.3", "3.4",
         "4.1", "4.2", "4.3", "4.4",
         "5.1", "5.2", "5.3", "5.4",
         "6.1", "6.2", "6.3", "6.4",
         "7.1", "7.2", "7.3", "7.4",
         "8.1", "8.2", "8.3", "8.4",
         "9.1", "9.2", "9.3", "9.4",
         "10.1", "10.2", "10.3", "10.4",
      ],        
      score: 0,
      lvl: -1
    }
function preload() {
 bakimg = loadImage("background.png")
 
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
 }
 vraag.lvl +=1
}
function Bbutton() {
 if(vraag.lvl === 0) {
   currentBg = "red"
 }
 vraag.lvl +=1
}
function Cbutton() {
if(vraag.lvl === 0) {
   currentBg = "red"
 }
 else if(vraag.lvl === 1) {
   currentBg = "green"
 }
 vraag.lvl +=1
}

function Dbutton() {
 if(vraag.lvl === 0) {
   currentBg = "red"
 }
 vraag.lvl +=1
}

function draw() {
   background(currentBg);
   bakimg.resize(600, 600);
   tint(255, 127);
   image(bakimg, 100, 0,);
   text(vraag.score, 200, 100);
   if(vraag.lvl === 0) {
      textSize(30);
      text(vraag.vragen[0], 200, 100)
   }

}


