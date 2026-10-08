let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let currentBg = "white";
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", 
  "parrot", "penguin", "pig", "rabbit", "snake"];
let funcs = [setred, setgreen, setblue, setorange, setpurple, setyellow];
let buttons = [];
let afbeelding = [];
function preload () {
  afbeelding.push(loadImage("assets/elephant.png"))
  afbeelding.push(loadImage("assets/giraffe.png"))
  afbeelding.push(loadImage("assets/hippo.png"))
  afbeelding.push(loadImage("assets/monkey.png"))
  afbeelding.push(loadImage("assets/panda.png"))
  afbeelding.push(loadImage("assets/parrot.png"))
  afbeelding.push(loadImage("assets/penguin.png"))
  afbeelding.push(loadImage("assets/pig.png"))
  afbeelding.push(loadImage("assets/rabbit.png"))
  afbeelding.push(loadImage("assets/snake.png"))
}


function setup ()
{
  let Xbutton = 10
  for(let i = 0; i < kleuren.length; i++) {
  createCanvas(800, 400);
	let button = createButton(kleuren[i]);
	button.position(Xbutton, 100);
	button.style('background-color', kleuren[i]);
	button.style('font-size', '16px');
	button.mousePressed(funcs[i]);
  buttons.push(button);
  Xbutton += 100
  }
  
}

function setred() {
  currentBg = "red";
  
}
function setgreen() {
  currentBg = "green"
}
function setblue() {
  currentBg = "blue"
}
function setorange() {
  currentBg = "orange"
}
function setpurple() {
  currentBg = "purple"
}
function setyellow() {
  currentBg = "yellow"
}

function draw() {
  background(currentBg);
 for (let i = 0; i < buttons.length; i++) {
  if (currentBg == kleuren[i]){
    buttons[i].hide();
  }
  else {
    buttons[i].show();
  }
 }
}
