function setup() {
  createCanvas(800, 600);
}
//variabelen
let redX = 500;
let redY = 430;

let yellowX = 0;
let yellowY = 430;

let whiteX = 370;
let whiteY = 520;

let pinkX = 150;
let pinkY = 430;

let carSize = 60;
let distance = 120;

let changingLane = 0;

let keypress = 2;
let adding = 1;
let wait = 0;

let moonX = 0
let moonY = 60 

let cloud1X = 860
let cloud1Y = 30

let cloud2X = 910
let cloud2Y = 40

let cloud3X = 1000
let cloud3Y = 50


function draw() {
  background(0, 50, 70);
  //-----------------
  //maan
  fill(200,200,255);
  strokeWeight(0);
  circle(moonX, moonY, 40)
  moonX += 0.5
  
  if (moonX >= 400){
    moonY += 0.05
  }
  else {
   moonY -= 0.05
  }
  if (moonX >= 880) {
    moonX = 0
    moonY = 60
  }
  //-------------
  //wolk 1
  fill(25)
  ellipse(cloud1X, cloud1Y, 40, 30);
  ellipse(cloud1X+10, cloud1Y-5, 40, 30);
  ellipse(cloud1X+20, cloud1Y, 40, 30);
  ellipse(cloud1X+30, cloud1Y-5, 40, 30);
  ellipse(cloud1X+5, cloud1Y+5, 40, 30);
  ellipse(cloud1X+20, cloud1Y+5, 40, 30)
    cloud1X -= 1
   if (cloud1X <= -100) {
  cloud1X = 860
 }
  //------
  //wolk 2
  ellipse(cloud2X, cloud2Y, 40, 30);
  ellipse(cloud2X+10, cloud2Y-5, 40, 30);
  ellipse(cloud2X+20, cloud2Y, 40, 30);
  ellipse(cloud2X+30, cloud2Y-5, 40, 30);
  ellipse(cloud2X+5, cloud2Y+5, 40, 30);
  ellipse(cloud2X+20, cloud2Y+5, 40, 30)
  cloud2X -= 1.5
   if (cloud2X <= -100) {
  cloud2X = 910
 }
  //-----
  //wolk 3
ellipse(cloud3X, cloud3Y, 40, 30);
  ellipse(cloud3X+10, cloud3Y-5, 40, 30);
  ellipse(cloud3X+20, cloud3Y, 40, 30);
  ellipse(cloud3X+30, cloud3Y-5, 40, 30);
  ellipse(cloud3X+5, cloud3Y+5, 40, 30);
  ellipse(cloud3X+20, cloud3Y+5, 40, 30)
  cloud3X -= 1
 if (cloud3X <= -100) {
  cloud3X = 1000
 }
  //--------------
  //gebouwen
  fill(30);
  strokeWeight(2);
  rect(200, 90, 150, 400);
  quad(350, 90, 380, 120, 380, 460, 350, 460);
  rect(600, 100, 210, 360);
  quad(570, 140, 600, 100, 600, 460, 570, 460);
  rect(225 , 360, 180, 100);
  rect(0, 100, 180, 360);
  quad(181, 101, 220, 150, 220, 460, 180, 460);
  quad(405, 360, 450, 395, 450, 460, 405, 460);
  
  
  fill(60);
  rect(210, 310, 205, 50);
  quad(415, 310, 455, 350, 455, 390, 415, 360);
  quad(405, 360, 415, 360, 455, 390, 450, 395);
  
 
  
  fill(20);
  strokeWeight(0)
  rect(0, 460, 800, 140);
  
  fill(150);
  rect(30, 510, 50, 10 );
  rect(120, 510, 50, 10 );
  rect(210, 510, 50, 10 );
  rect(300, 510, 50, 10 );
  rect(390, 510, 50, 10 );
  rect(480, 510, 50, 10 );
  rect(570, 510, 50, 10 );
  rect(660, 510, 50, 10 );
  rect(750, 510, 50, 10 );
  fill(0)
  rect(625, 125, 50, 25);
  rect(700, 125, 50, 25);
  rect(775, 125, 50, 25);
  rect(775, 175, 50, 25);
  rect(700, 175, 50, 25);
  rect(625, 175, 50, 25);
  rect(775, 225, 50 ,25);
  rect(700, 275, 50 ,25);
  rect(625, 275, 50 ,25);
  rect(625, 325, 50 ,25);
  rect(700, 325, 50 ,25);
  rect(775, 325, 50 ,25);
  rect(700, 375, 50, 25);
  rect(625, 375, 50, 25);
  rect(120, 120, 50, 25);
  rect(45, 120, 50, 25);
  rect(120, 170, 50, 25);
  rect(45, 220, 50, 25);
  rect(-30, 220, 50, 25);
  rect(45, 270, 50, 25);
  rect(120, 270, 50, 25);
  rect(120, 320, 50, 25);
  rect(45, 320, 50, 25);
  rect(-30, 320, 50, 25);
  rect(-30, 370, 50, 25);
  //----
  rect(210, 100, 10, 5);
  rect(210, 110, 10, 5);
  rect(210, 120, 10, 5);
  rect(210, 130, 10, 5);
  rect(225, 100, 10, 5);
  rect(225, 110, 10, 5);
  rect(225, 120, 10, 5);
  
  rect(225, 150, 10, 5);
  rect(225, 160, 10, 5);
  rect(225, 170, 10, 5);
 
  rect(225, 190, 10, 5);
  rect(225, 200, 10, 5);
 
  rect(225, 220, 10, 5);
 
  rect(225, 240, 10, 5);
  rect(225, 250, 10, 5);
  
  rect(225, 270, 10, 5);
  rect(225, 280, 10, 5);
  
  rect(240, 110, 10, 5);
  rect(240, 120, 10, 5);
  rect(240, 130, 10, 5);
 
  rect(240, 150, 10, 5);
  
  rect(240, 170, 10, 5);
  rect(240, 180, 10, 5);
  rect(240, 190, 10, 5);
 
  rect(240, 220, 10, 5);

  rect(240, 240, 10, 5);

  rect(240, 260, 10, 5);
  rect(240, 270, 10, 5);
  rect(240, 280, 10, 5);
 
  rect(255, 100, 10, 5);
  rect(255, 110, 10, 5);
  
  rect(255, 130, 10, 5);
  rect(255, 140, 10, 5);
  
  rect(255, 170, 10, 5);
  rect(255, 180, 10, 5);
  rect(255, 190, 10, 5);
  rect(255, 200, 10, 5);

  rect(255, 220, 10, 5);
  rect(255, 230, 10, 5);
  rect(255, 240, 10, 5);
 
  rect(255, 260, 10, 5);
  rect(255, 270, 10, 5);
  
  rect(255, 300, 10, 5);
  rect(270, 100, 10, 5);
  rect(270, 110, 10, 5);
  rect(270, 120, 10, 5);
  rect(270, 130, 10, 5);

  rect(270, 150, 10, 5);
  rect(270, 160, 10, 5);
  rect(270, 170, 10, 5);
  rect(270, 180, 10, 5);
  
  rect(270, 210, 10, 5);
  rect(270, 220, 10, 5);
  rect(270, 230, 10, 5);
  rect(270, 240, 10, 5);

  rect(270, 260, 10, 5);
  
  rect(270, 280, 10, 5);
  rect(270, 290, 10, 5);
  rect(270, 300, 10, 5);
   rect(285, 100, 10, 5);
  rect(285, 110, 10, 5);
  rect(285, 120, 10, 5);
  rect(285, 130, 10, 5);
 
  rect(285, 170, 10, 5);
  rect(285, 180, 10, 5);
  rect(285, 190, 10, 5);
  
  rect(285, 210, 10, 5);
  rect(285, 220, 10, 5);
  
  rect(285, 250, 10, 5);
  
  rect(285, 270, 10, 5);
  rect(285, 280, 10, 5);
  rect(285, 290, 10, 5);
  rect(285, 300, 10, 5);
  rect(300, 100, 10, 5);
  rect(300, 110, 10, 5);
  rect(300, 120, 10, 5);
  rect(300, 130, 10, 5);

  rect(300, 160, 10, 5);
  rect(300, 170, 10, 5);
 
  rect(300, 200, 10, 5);

  rect(300, 220, 10, 5);
  rect(300, 230, 10, 5);
  rect(300, 240, 10, 5);
  
  rect(300, 260, 10, 5);
  rect(300, 270, 10, 5);
  rect(300, 280, 10, 5);
  rect(300, 290, 10, 5);
  rect(300, 300, 10, 5);
 
  rect(315, 130, 10, 5);
  rect(315, 140, 10, 5);
  rect(315, 150, 10, 5);
  rect(315, 160, 10, 5);
  rect(315, 170, 10, 5);
  rect(315, 180, 10, 5);

  rect(315, 200, 10, 5);
  rect(315, 210, 10, 5);
  rect(315, 220, 10, 5);
  
  rect(315, 240, 10, 5);
  rect(315, 250, 10, 5);
 
  rect(315, 270, 10, 5);
  rect(315, 280, 10, 5);
  rect(315, 290, 10, 5);
  rect(315, 300, 10, 5);
  rect(330, 100, 10, 5);
  
  rect(330, 120, 10, 5);
  rect(330, 130, 10, 5);
  
  rect(330, 150, 10, 5);
  rect(330, 160, 10, 5);
  

  rect(330, 210, 10, 5);

  rect(330, 230, 10, 5);
  rect(330, 240, 10, 5);
  rect(330, 250, 10, 5);
  rect(330, 260, 10, 5);
 
  rect(330, 280, 10, 5);
  rect(330, 290, 10, 5);
  rect(330, 300, 10, 5);
  

  
  //flikkerend licht
  let lights = random(0, 100);
  if (lights >= 97 ){
    fill(247, 222, 48);
    rect(625, 125, 50, 25);
    fill(0)
    circle(650, 140, 10)
    strokeWeight(2)
    line(650, 140, 650, 150);
    line(650, 148, 655, 145);
  }
  //-----
  //de rest van de lichten die aan staan
 strokeWeight(0)
  fill(247, 222, 48);
  rect(775, 375, 50, 25);
   rect(775, 275, 50 ,25);
  rect(700, 225, 50 ,25);
  rect(625, 225, 50, 25);
  rect(240, 370, 50, 70);
  rect(340, 370, 50, 70);
  rect(45, 370, 50, 25);
  rect(120, 370, 50, 25);
  rect(-30, 270, 50, 25);
  rect(120, 220, 50, 25);
  rect(-30, 120, 50, 25);
  rect(-30, 170, 50, 25);
  rect(45, 170, 50, 25);
    rect(330, 220, 10, 5);
    rect(330, 140, 10, 5);
  rect(330, 190, 10, 5);
  rect(330, 200, 10, 5);
   rect(315, 260, 10, 5);
   rect(330, 110, 10, 5);
   rect(315, 230, 10, 5);
   rect(330, 170, 10, 5);
  rect(330, 180, 10, 5);
   rect(330, 270, 10, 5);
     rect(315, 190, 10, 5);
      rect(315, 100, 10, 5);
  rect(315, 110, 10, 5);
  rect(315, 120, 10, 5);
  rect(300, 250, 10, 5);
    rect(300, 210, 10, 5);
     rect(300, 180, 10, 5);
  rect(300, 190, 10, 5);
  rect(300, 140, 10, 5);
  rect(300, 150, 10, 5);
  rect(285, 260, 10, 5);
  rect(285, 230, 10, 5);
  rect(285, 240, 10, 5);
  rect(285, 200, 10, 5);
   rect(285, 140, 10, 5);
  rect(285, 150, 10, 5);
  rect(285, 160, 10, 5);
  rect(270, 270, 10, 5);
    rect(270, 250, 10, 5);
    rect(270, 190, 10, 5);
  rect(270, 200, 10, 5);
   rect(270, 140, 10, 5);
    rect(255, 280, 10, 5);
  rect(255, 290, 10, 5);
   rect(255, 250, 10, 5);
     rect(255, 210, 10, 5);
     rect(255, 150, 10, 5);
  rect(255, 160, 10, 5);
  rect(255, 120, 10, 5);
   rect(240, 290, 10, 5);
  rect(240, 300, 10, 5);
    rect(240, 250, 10, 5);
      rect(240, 230, 10, 5);
       rect(240, 200, 10, 5);
  rect(240, 210, 10, 5);
  rect(240, 160, 10, 5);
   rect(240, 140, 10, 5);
   rect(225, 290, 10, 5);
  rect(225, 300, 10, 5);
   rect(240, 100, 10, 5);
   rect(225, 260, 10, 5);
    rect(225, 230, 10, 5);
     rect(225, 210, 10, 5);
      rect(225, 180, 10, 5);
      rect(225, 130, 10, 5);
  rect(225, 140, 10, 5);
  strokeWeight(0)
  
  
  
  //-----------
  //stoplicht
  strokeWeight(2)
  fill(40);
  rect(660, 400, 10, 60);
  rect(650, 350, 30, 60);
  fill(100, 0 ,0)
  circle(665, 360, 15);
  fill(0, 100, 0)
  circle(665, 395, 15);
  fill(100, 50, 0);
  circle(665, 377, 15);
// als er enter wordt gedruky verandert het licht en rijden de autos slomer of stoppen
  wait += adding
 if (keyIsPressed === true && wait >= 10) { 
 if (keyCode === ENTER) {
  keypress += 1
  wait = 0
 }
}
 //prange
 if (keypress == 3){
  fill(100, 0, 0);
  circle(665, 360, 15);
  fill(255, 100, 0);
  circle(665, 377, 15);
  
  
  redX += 1;
  pinkX += 1;
  whiteX += 1;
  yellowX += 1;
  
 } 
 //groen
 else if (keypress == 2){
  fill(100, 50, 0);
  circle(665, 377, 15);
  fill(0, 255, 0);
  circle(665, 395, 15);
  redX += 1;
  pinkX += 1;
  whiteX += 2;
  yellowX += 3;
  
 }
 //rood
 else if(keypress == 1)
 {fill(255, 0 ,0)
  circle(665, 360, 15);
  fill(0, 100, 0)
  circle(665, 395, 15);
  
  
 
 }
 else if(keypress >= 4){
  keypress = 1
 }

 //de "gele" auto(die is nu blauw) als de andere autos tegen komt verandert die van baan.

  if (changingLane == 0) {

    if (yellowY == 430) {

      if (redX > yellowX && redX - yellowX < distance || pinkX > yellowX && pinkX - yellowX < distance ) {
        changingLane = 1;
      }

    } else if (yellowY == 520) {

      if (whiteX > yellowX && whiteX - yellowX < distance) {
        changingLane = -1;
      }
    }
  }

  if (changingLane == 1) {
    yellowY += 2;

    if (yellowY >= 520) {
      yellowY = 520;
      changingLane = 0;
    }

  } else if (changingLane == -1) {
    yellowY -= 2;

    if (yellowY <= 430) {
      yellowY = 430;
      changingLane = 0;
    }
  }

  if (redX > 820) {
    redX = 0;
  }

  if (whiteX > 820) {
    whiteX = 0;
  }

  if (yellowX > 820) {
    yellowX = 0;
  }
  if (pinkX > 820) {
    pinkX = 0;
  }
  //de rodeauto
strokeWeight(0)
  fill(100, 0, 0);
  rect(redX, redY, 70, carSize);
  rect(redX, redY+40, 90, 20);
  fill(50)
  circle(redX+15, redY+60, 25);
  circle(redX+70, redY+60, 25);
  //de roze auto
  fill(200, 0, 255);
  rect(pinkX, pinkY, 70, carSize);
  rect(pinkX, pinkY+40, 90, 20);
  fill(50)
  circle(pinkX+15, pinkY+60, 25);
  circle(pinkX+70, pinkY+60, 25);
  // de gele/blauwe auto
  fill(0, 0, 100);
  rect(yellowX, yellowY, 70, carSize);
   rect(yellowX, yellowY+40, 90, 20)
   fill(50)
  circle(yellowX+15, yellowY+60, 25);
  circle(yellowX+70, yellowY+60, 25);
// de witten auto
  fill(255);
  rect(whiteX, whiteY, 70, carSize);
  rect(whiteX, whiteY+40, 90, 20)
  fill(50)
  circle(whiteX+15, whiteY+60, 25);
  circle(whiteX+70, whiteY+60, 25);
  strokeWeight(2)
  //dit is delantaaren paal die voor alles staat.
  strokeWeight(0)
  fill(255, 200, 0)
  circle(105, 440, 10)
  
  fill(70)
  rect(60, 420, 10, 180);
  rect(60, 420, 50, 10);
  quad(100, 430, 110, 430, 120, 440, 90, 440)
  
}

