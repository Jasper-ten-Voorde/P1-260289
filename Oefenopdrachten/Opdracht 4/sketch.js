function setup() {
  createCanvas(800, 400);
}
let keypress = 4;
let adding = 1;
let resetTime = 0;
let counter = 0 
let wait = 0
let X1 = 500
let Y1 = 100
let X2 = 490
let Y2 = 110

function draw() {
  loop()
  
  background(220);
   textSize(10)
   fill(0)
  text('1. Houd B in om een blokje te laten verschijnen.', 20, 20);
  text('2. Druk op spatie om het getal op 0 te zetten.', 20, 120);
  text('3. Druk op enter om van rood -> groen -> oranje te gaan.', 20, 240);
  text('4. Beweeg de eightball met WASD of de pijltjestoetsen.', 360, 20);
 if (keyCode === 66) {
  rect(20, 25, 60, 60);
 }
 textSize(50)
 counter += adding
 textSize
 text(counter, 20, 170);
 
 if (keyCode == 32) {
   counter = -1
   keyCode = 0
 }
 else if(counter >= 500){
  counter = -1
  counter += 1
  
 }
 //--------------
 fill (100)
  rect(110, 350, 20, 100);
 rect(100, 250, 40, 110);
 fill(100, 0 ,0);
 circle(120, 270, 30, )
 fill(100, 50, 0);
 circle(120, 305, 30);
 fill(0, 100, 0);
 circle(120, 340, 30);

 wait += adding
 if (keyCode === 13 && wait >= 10) {
  keypress += 1
  keyCode = 0
  wait = 0
 }
 //prange
 if (keypress == 3){
  fill(100, 0, 0);
  circle(120, 270 , 30);
  fill(255, 100, 0);
  circle(120, 305, 30);
  
  keyCode = 0
  
 } 
 //groen
 else if (keypress == 2){
  fill(100, 50, 0);
  circle(120, 305, 30);
  fill(0, 255, 0);
  circle(120, 340, 30);
  
  keyCode = 0
 }
 //rood
 else if(keypress == 1)
 {fill(255, 0 ,0)
  circle(120, 270, 30);
  fill(0, 100, 0)
  circle(120, 340, 30);
  
  keyCode = 0
 
 }
 else if(keypress >= 4){
  keypress = 1
 }
 //------------------
 fill(0)
 circle(X1, Y1, 100)
 
 fill(255)
 circle(X1, Y1, 50)
 fill(0)
 textSize(30)
 text('8',X2, Y2);
 if (keyIsDown == LEFT_ARROW) {
   X1 -= 100
   X2 -= 100
 }
 
 
}

