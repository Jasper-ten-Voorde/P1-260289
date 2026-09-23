let vak1 = 0;
let vak2 = 0;
let vak3 = 0;
let vak4 = 0;
let vak5 = 0;
let vak6 = 0;
let vak7 = 0;
let vak8 = 0;
let vak9 = 0;
//----------
//horizontalen rijen 1, 2 en 3
let y1 = 100;
let y2 = 190;
let y3 = 280;
//----------
//verticalen rijen 1, 2, 3
let x1 = 270;
let x2 = 360;
let x3 = 450;

let press = 1
let wait = 0

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  textSize(40)
  
  strokeWeight(0);
  wait +=1
  if (press === 1) {
  background(100, 0, 0);
  fill(200, 0, 200)
  text('Player 1', 340, 50);
 }
 else if (press === 2) {
  background(0, 0, 100);
  fill(200, 0, 200)
  text('Player 2', 340, 50);
 }
 fill(100);
  rect(x2, y1, 80, 80, 20);
  rect(x1, y1, 80, 80, 20);
  rect(x3, y1, 80, 80, 20);
  rect(x2, y2, 80, 80, 20);
  rect(x1, y2, 80, 80, 20);
  rect(x3, y2, 80, 80, 20);
  rect(x2, y3, 80, 80, 20);
  rect(x1, y3, 80, 80, 20);
  rect(x3, y3, 80, 80, 20);

  //hover over blokjes
   if (mouseX > x1 && mouseX < x1 + 80 && mouseY > y1 && mouseY < y1 + 80 && vak1 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak1 = 1
      press = 2
      wait = 0
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak1 = 2
      press = 1
      wait = 0
    }
    
    else {
    fill(150);
    rect(270, 100, 80, 80, 20);
   }
  }
  if (mouseX > x2 && mouseX < x2 + 80 && mouseY > y1 && mouseY < y1 + 80 && vak2 === 0) {
   if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak2 = 1
      press = 2
      wait = 0
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak2 = 2
      press = 1
      wait = 0
    }
    else {
    fill(150);
    //my fav pokemon is lurantis
    rect(x2, y1, 80, 80, 20);
    }
    
  }
  
  if (mouseX > x3 && mouseX < x3 + 80 && mouseY > y1 && mouseY < y1 + 80 && vak3 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak3 = 1
      press = 2
      wait = 0
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak3 = 2
      press = 1
      wait = 0
    }
    
    else {
    fill(150);
    rect(450, 100, 80, 80, 20);
    }
  }
  if (mouseX > x2 && mouseX < x2 + 80 && mouseY > y2 && mouseY < y2 + 80 && vak5 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak5 = 1
      press = 2
      wait = 0
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak5= 2
      press = 1
      wait = 0
    }
    
    else {
    fill(150);
    rect(360, 190, 80, 80, 20);
   }
  }
  if (mouseX > x1 && mouseX < x1 + 80 && mouseY > y2 && mouseY < y2 + 80 && vak4 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak4 = 1
      press = 2
      wait = 0
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak4 = 2
      press = 1
      wait = 0
    }
    
    else{
    fill(150);
    rect(270, 190, 80, 80, 20);
    }
  }
  if (mouseX > x3 && mouseX < x3 + 80 && mouseY > y2 && mouseY < y2 + 80 && vak6 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak6 = 1
      press = 2
      wait = 0
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak6 = 2
      press = 1
      wait = 0
    }
  
    else{
    fill(150);
    rect(450, 190, 80, 80, 20);
   }
  }
  if (mouseX > x2 && mouseX < x2 + 80 && mouseY > y3 && mouseY < y3 + 80 && vak8 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak8 = 1
      press = 2
      wait = 0
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak8 = 2
      press = 1
      wait = 0
    }
//im going insano TWT
    else{
    fill(150);
    rect(360, 280, 80, 80, 20);
    }
  }
   if (mouseX > x1 && mouseX < x1 + 80 && mouseY > y3 && mouseY < y3 + 80 && vak7 === 0) {
   if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak7 = 1
      press = 2
      wait = 0
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak7 = 2
      press = 1
      wait = 0
    }
    
    else{
    fill(150);
    rect(270, 280, 80, 80, 20);
    }
  }
   if (mouseX > x3 && mouseX < x3 + 80 && mouseY > y3 && mouseY < y3 +80 && vak9 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) { //raaaaaaaaaaaahhhhhh
      vak9 = 1
      press = 2
      wait = 0
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak9 = 2
      press = 1
      wait = 0
    }
    
    else{
    fill(150);
    rect(450, 280, 80, 80, 20);
    }
  }
//--------------------------
 

 //---------------------
  if (vak1 === 1) {
    // press = 2
    fill(255, 0, 0);
    rect(x1, y1, 80, 80, 20);
    
  }
  else if (vak1 === 2) {
    // press = 1
    fill(0, 0, 255);
    rect(x1, y1, 80, 80, 20);
    
  }
 
 if (vak2 === 1) {
  //  press = 2  
   fill(255, 0, 0);
   rect(x2, y1, 80, 80, 20);
    
  }
  else if (vak2 === 2) {
    // press = 1
    fill(0, 0, 255);
    rect(x2, y1, 80, 80, 20);
    
  }
//  //-----
 
//   //----------
  if (vak3 === 1) {
    // press = 2
    fill(255, 0, 0);
    rect(x3, y1, 80, 80, 20);
    
  }
  else if (vak3 === 2) {
    // press = 1
    fill(0, 0, 255);
    rect(x3, y1, 80, 80, 20);
    
  }
  if (vak4 === 1) {
    // press = 2
    fill(255, 0, 0);
    rect(x1, y2, 80, 80, 20);
    
  }
  else if (vak4 === 2) {
    // press = 1
    fill(0, 0, 255);
    rect(x1, y2, 80, 80, 20);
    
  }
  if (vak5 === 1) {
    // press = 2
    fill(255, 0, 0);
    rect(x2, y2, 80, 80, 20);
    
  }
  else if (vak5 === 2) {
    // press = 1
    fill(0, 0, 255);
    rect(x2, y2, 80, 80, 20);
    
  }
  if (vak6 === 1) {
    // press = 2
    fill(255, 0, 0);
    rect(x3, y2, 80, 80, 20);
    
  }
  else if (vak6 === 2) {
    // press = 1
    fill(0, 0, 255);
    rect(x3, y2, 80, 80, 20);
    
  }
  if (vak7 === 1) {
    // press = 2
    fill(255, 0, 0);
    rect(x1, y3, 80, 80, 20);
    
  }
  else if (vak7 === 2) {
    // press = 1
    fill(0, 0, 255);
    rect(x1, y3, 80, 80, 20);
    
  }
  if (vak8 === 1) {
    // press = 2
    fill(255, 0, 0);
    rect(x2, y3, 80, 80, 20);
    
  }
  else if (vak8 === 2) {
    // press = 1
    fill(0, 0, 255);
    rect(x2, y3, 80, 80, 20);
    
  }
  if (vak9 === 1) {
    // press = 2
    fill(255, 0, 0);
    rect(x3, y3, 80, 80, 20);
    
  }
  else if (vak9 === 2) {
    // press = 1
    fill(0, 0, 255);
    rect(x3, y3, 80, 80, 20);
  
  }
  if (vak1 === 1 && vak2 === 1 && vak3 === 1 || vak4 === 1 && vak5 === 1 && vak6 === 1 || vak7 ===1 && vak8 === 1  && vak9 === 1 || vak1 === 1 && vak4 === 1 && vak7 === 1|| vak2 === 1&& vak5 === 1 && vak8 === 1 || vak3 === 1 && vak6 === 1 && vak9 === 1 || vak1 === 1 && vak5 === 1 && vak9 === 1 || vak3 === 1 && vak5 === 1 && vak7 === 1) {
    text('PLAYER 1 WINS', 100, 100);
  }
  else if (vak1 === 2 && vak2 === 2 && vak3 === 2 || vak4 === 2 && vak5 === 2 && vak6 === 2 || vak7 ===2 && vak8 === 2  && vak9 === 2 || vak1 === 2 && vak4 === 2 && vak7 === 2|| vak2 === 2&& vak5 === 2 && vak8 === 2 || vak3 === 2 && vak6 === 2 && vak9 === 2 || vak1 === 2 && vak5 === 2 && vak9 === 2 || vak3 === 2 && vak5 === 2 && vak7 === 2) {
    text('PLAYER 2 WINS', 100, 100);
  }
  else if (vak1 != 0 && vak2 != 0 && vak3 != 0 && vak4 != 0 && vak5 != 0 && vak6 != 0 && vak7 != 0 && vak8 != 0 && vak9 != 0) {
    text('DRAW', 100, 100);
  }
 
}
//----------
 


// function mouseClicked () {
//   if (mouseButton === LEFT && press === 1) {
//     press = 2
//   }
//   else if (mouseButton === LEFT && press === 2) {
//     press = 1
//   }
//   if 
// }
