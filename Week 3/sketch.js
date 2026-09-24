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
let vak11 = 0;
let vak12 = 0;
let vak13 = 0;
let vak31 = 0;
let vak32 = 0;
let vak33 = 0;
let vak71 = 0; 
let vak72 = 0;
let vak73 = 0;
let vak91 = 0;
let vak92 = 0;
let vak93 = 0;
//----------
//horizontalen rijen 1, 2 en 3
let y1 = 200;
let y2 = 290;
let y3 = 380;
//----------
//verticalen rijen 1, 2, 3
let x1 = 270;
let x2 = 360;
let x3 = 450; //700

let press = 1
let wait = 0

let win = 0

let player1 = 0
let player2 = 0

let moveX = 100
let moveY = 100



function setup() {
  createCanvas(800, 600);
  
}

function draw() {
  let powerup = random(100);
   
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
 else if (press === 3 && win === 1) {
  background(100, 0 ,0);
  
 }
 else if (press === 3 && win === 2) {
  background(0, 0, 100);
 }
 else if (press === 3 && win === 3) {
  background(100, 0, 100)
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
      if (powerup < 30 && powerup >= 11  && player1 === 0) {
        player1 = 1
      }
      else if (powerup <= 100 && player1 === 0) {
        player1 = 2
      }
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak1 = 2
      press = 1
      wait = 0
      if (powerup < 30 && powerup > 10 && player2 === 0) {
        player2 = 1
      }
      else if (powerup <= 100 && player2 === 0) {
        player2 = 2
      }
    }
    else if (press === 3 && win === 1) {
      fill(100);
      rect(x1, y1, 80, 80, 20)
    }
    else {
    fill(150);
    rect(x1, y1, 80, 80, 20);
   }
  }
  if (mouseX > x2 && mouseX < x2 + 80 && mouseY > y1 && mouseY < y1 + 80 && vak2 === 0) {
   if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak2 = 1
      press = 2
      wait = 0
       if (powerup < 30 && powerup > 10 && player1 === 0) {
        player1 = 1
      }
      else if (powerup <= 10 && player1 === 0) {
        player1 = 2
      }
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak2 = 2
      press = 1
      wait = 0
      if (powerup < 30 && powerup > 10 && player2 === 0) {
        player2 = 1
      }
      else if (powerup <= 10 && player2 === 0) {
        player2 = 2
      }
    }
    else if (press === 3) {
      fill(100);
      rect(x2, y1, 80, 80, 20)
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
      if (powerup < 30 && powerup > 10 && player1 === 0) {
        player1 = 1
      }
      else if (powerup <= 10 && player1 === 0) {
        player1 = 2
      }

    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak3 = 2
      press = 1
      wait = 0
      if (powerup < 30 && powerup > 10 && player2 === 0) {
        player2 = 1
      }
      else if (powerup <= 10 && player2 === 0) {
        player2 = 2
      }
    }
    else if (press === 3) {
      fill(100);
      rect(x3, y1, 80, 80, 20)
    }
    else {
    fill(150);
    rect(x3, y1, 80, 80, 20);
    }
  }
  if (mouseX > x2 && mouseX < x2 + 80 && mouseY > y2 && mouseY < y2 + 80 && vak5 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak5 = 1
      press = 2
      wait = 0
      if (powerup < 30 && powerup > 10 && player1 === 0) {
        player1 = 1
      }
      else if (powerup <= 10 && player1 === 0) {
        player1 = 2
      }
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak5= 2
      press = 1
      wait = 0
      if (powerup < 30 && powerup > 10 && player2 === 0) {
        player2 = 1
      }
      else if (powerup <= 10 && player2 === 0) {
        player2 = 2
      }
    }
    else if (press === 3) {
      fill(100);
      rect(x2, y2, 80, 80, 20)
    }
    else {
    fill(150);
    rect(x2, y2, 80, 80, 20);
   }
  }
  if (mouseX > x1 && mouseX < x1 + 80 && mouseY > y2 && mouseY < y2 + 80 && vak4 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak4 = 1
      press = 2
      wait = 0
      if (powerup < 30 && powerup > 10 && player1 === 0) {
        player1 = 1
      }
      else if (powerup <= 10 && player1 === 0) {
        player1 = 2
      }
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak4 = 2
      press = 1
      wait = 0
      if (powerup < 30 && powerup > 10 && player2 === 0) {
        player2 = 1
      }
      else if (powerup <= 10 && player2 === 0) {
        player2 = 2
      }
    }
    else if (press === 3) {
      fill(100);
      rect(x1, y2, 80, 80, 20)
    }
    else{
    fill(150);
    rect(x1, y2, 80, 80, 20);
    }
  }
  if (mouseX > x3 && mouseX < x3 + 80 && mouseY > y2 && mouseY < y2 + 80 && vak6 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak6 = 1
      press = 2
      wait = 0
      if (powerup < 30 && powerup > 10 && player1 === 0) {
        player1 = 1
      }
      else if (powerup <= 10 && player1 === 0) {
        player1 = 2
      }
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak6 = 2
      press = 1
      wait = 0
      if (powerup < 30 && powerup > 10 && player2 === 0) {
        player2 = 1
      }
      else if (powerup <= 10 && player2 === 0) {
        player2 = 2
      }
    }
  else if (press === 3) {
      fill(100);
      rect(x3, y2, 80, 80, 20)
    }
    else{
    fill(150);
    rect(x3, y2, 80, 80, 20);
   }
  }
  if (mouseX > x2 && mouseX < x2 + 80 && mouseY > y3 && mouseY < y3 + 80 && vak8 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak8 = 1
      press = 2
      wait = 0
      if (powerup < 30 && powerup > 10 && player1 === 0) {
        player1 = 1
      }
      else if (powerup <= 10 && player1 === 0) {
        player1 = 2
      }
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak8 = 2
      press = 1
      wait = 0
      if (powerup < 30 && powerup > 10 && player2 === 0) {
        player2 = 1
      }
      else if (powerup <= 10 && player2 === 0) {
        player2 = 2
      }
    }
    else if (press === 3) {
      fill(100);
      rect(x1, y3, 80, 80, 20)
    }
 //im going insano TWT
    else{
    fill(150);
    rect(x2, y3, 80, 80, 20);
    }
  }
   if (mouseX > x1 && mouseX < x1 + 80 && mouseY > y3 && mouseY < y3 + 80 && vak7 === 0) {
   if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak7 = 1
      press = 2
      wait = 0
      if (powerup < 30 && powerup > 10 && player1 === 0) {
        player1 = 1
      }
      else if (powerup <= 10 && player1 === 0) {
        player1 = 2
      }
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak7 = 2
      press = 1
      wait = 0
      if (powerup < 30 && powerup > 10 && player2 === 0) {
        player2 = 1
      }
      else if (powerup <= 10 && player2 === 0) {
        player2 = 2
      }
    }
    else if (press === 3) {
      fill(100);
      rect(x1, y2, 80, 80, 20)
    }
    else{
    fill(150);
    rect(x1, y3, 80, 80, 20);
    }
  }
   if (mouseX > x3 && mouseX < x3 + 80 && mouseY > y3 && mouseY < y3 +80 && vak9 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) { //raaaaaaaaaaaahhhhhh
      vak9 = 1
      press = 2
      wait = 0
      if (powerup < 30 && powerup > 10 && player1 === 0) {
        player1 = 1
      }
      else if (powerup <= 10 && player1 === 0) {
        player1 = 2
      }
    }
    else if (mouseIsPressed === true && press === 2 && wait >= 15) {
      vak9 = 2
      press = 1
      wait = 0
      if (powerup < 30 && powerup > 10 && player2 === 0) {
        player2 = 1
      }
      else if (powerup <= 10 && player2 === 0) {
        player2 = 2
      }
    }
    else if (press === 3) {
      fill(100);
      rect(x3, y3, 80, 80, 20)
    }
    else{
    fill(150);
    rect(x3, y3, 80, 80, 20);
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
  //---------------
  if (vak11 === 1) {
    fill(255, 0, 0);
    rect(x1, y1 - 90, 80, 80, 20);
  }
  else if (vak11 === 2){
    fill(0, 0, 255);
    rect(x1, y1 - 90, 80, 80, 20);
  }
  if (vak12 === 1) {
    fill(255, 0, 0);
    rect(x1 - 90, y1 - 90, 80, 80, 20);
  }
  else if (vak12 === 2) {
    fill(0, 0, 255);
    rect(x1 - 90, y1 - 90, 80, 80, 20);
  }
  if (vak13 === 1) {
    fill(255, 0, 0);
    rect(x1 - 90, y1, 80, 80, 20);
  }
  else if (vak13 === 2) {
    fill(0, 0, 255);
    rect(x1 - 90, y1, 80, 80, 20);
  }
  if (vak31 === 1) {
    fill(255, 0, 0);
    rect(x3, y1 - 90, 80, 80, 20);
  }
  else if (vak31 === 2) {
    fill(0, 0, 255);
    rect(x3, y1 - 90, 80, 80, 20);
  }


  //------------
  if (vak1 === 1 && vak2 === 1 && vak3 === 1 || vak4 === 1 && vak5 === 1 && vak6 === 1 || vak7 ===1 && vak8 === 1  && vak9 === 1 || vak1 === 1 && vak4 === 1 && vak7 === 1|| vak2 === 1&& vak5 === 1 && vak8 === 1 || vak3 === 1 && vak6 === 1 && vak9 === 1 || vak1 === 1 && vak5 === 1 && vak9 === 1 || vak3 === 1 && vak5 === 1 && vak7 === 1 || vak12 === 1 && vak1 === 1 && vak5 === 1 || vak11 === 1 && vak1 === 1 && vak4 === 1 || vak13 === 1 && vak1 === 1 && vak2 === 1 || vak31 === 1 && vak3 === 1 && vak6 === 1 
   || vak32 === 1 && vak3 === 1 && vak5 === 1 || vak33 === 1 && vak3 === 1 && vak2 === 1 || vak71 === 1 && vak7 === 1 && vak8 === 1 || vak72 === 1 && vak7 === 1 && vak5 === 1 || vak73 === 1 && vak7 === 1 && vak4 === 1 || vak91 === 1 && vak9 === 1 && vak8 === 1 || vak92 === 1 && vak9 === 1 && vak5 === 1 || vak93 === 1 && vak9 === 1 && vak6 === 1) {
    
    text('PLAYER 1 WINS', 255, 100);
    press = 3
    win = 1
  } 
  else if (vak1 === 2 && vak2 === 2 && vak3 === 2 || vak4 === 2 && vak5 === 2 && vak6 === 2 || vak7 ===2 && vak8 === 2  && vak9 === 2 || vak1 === 2 && vak4 === 2 && vak7 === 2|| vak2 === 2&& vak5 === 2 && vak8 === 2 || vak3 === 2 && vak6 === 2 && vak9 === 2 || vak1 === 2 && vak5 === 2 && vak9 === 2 || vak3 === 2 && vak5 === 2 && vak7 === 2 || vak12 === 2 && vak1 === 2 && vak5 === 2 || vak11 === 2 && vak1 === 2 && vak4 === 2 || vak13 === 2 && vak1 === 2 && vak2 === 2 || vak31 === 2 && vak3 === 2 && vak6 === 2 
   || vak32 === 2 && vak3 === 2 && vak5 === 2 || vak33 === 2 && vak3 === 2 && vak2 === 2 || vak71 === 2 && vak7 === 2 && vak8 === 2 || vak72 === 2 && vak7 === 2 && vak5 === 2 || vak73 === 2 && vak7 === 2 && vak4 === 2 || vak91 === 2 && vak9 === 2 && vak8 === 2 || vak92 === 2 && vak9 === 2 && vak5 === 2 || vak93 === 2 && vak9 === 2 && vak6 === 2
  ) {
    text('PLAYER 2 WINS', 255, 100);
    press = 3
    win = 2
  }
  else if (vak1 != 0 && vak2 != 0 && vak3 != 0 && vak4 != 0 && vak5 != 0 && vak6 != 0 && vak7 != 0 && vak8 != 0 && vak9 != 0) {
    text('DRAW', 340, 100);
    press = 3
    win = 3
  }
  if (press === 3) {
   
    if (mouseX > 300 && mouseX < 500 && mouseY > 125 && mouseY < 225) {
      fill(200);
      rect(300, 125, 200, 100);
      fill(100)
      text('reset', 350, 185);
    
      if (mouseIsPressed && win === 1) {
         player1 = 0
         player2 = 0
        press = 2
        vak1 = 0
        vak2 = 0
        vak3 = 0
        vak4 = 0
        vak5 = 0
        vak6 = 0
        vak7 = 0
        vak8 = 0
        vak9 = 0
        vak11 = 0
        vak12 = 0
        x1 = 270;
    x2 = 360;
    x3 = 450;
      }
      else if (mouseIsPressed && win === 2) {
       press = 1
       player1 = 0
      player2 = 0
        vak1 = 0
        vak2 = 0
        vak3 = 0
        vak4 = 0
        vak5 = 0
        vak6 = 0
        vak7 = 0
        vak8 = 0
        vak9 = 0
        vak11 = 0
        vak12 = 0
        x1 = 270;
    x2 = 360;
    x3 = 450;
      }
      else if (mouseIsPressed && win === 3) {
       let drawstart = random(100);
       if (drawstart >= 51) {
        press = 1
       }
       else {
        press = 2
       }
       vak1 = 0
       vak2 = 0
       vak3 = 0
       vak4 = 0
       vak5 = 0
       vak6 = 0
       vak7 = 0
       vak8 = 0
       vak9 = 0
       vak11 = 0
       vak12 = 0
       player1 = 0
       player2 = 0
       x1 = 270;
    x2 = 360;
    x3 = 450;
      }
    }
    else{
    fill(100)
    rect(300, 125, 200, 100);
    fill(0)
    text('reset', 350, 185);
    }
  }
 
 if (player1 === 1) {
  if (keyCode === 49) {

   if (press === 2){
   fill(240); 
   rect(0,0, 800, 600);
   fill(0)
   text(player1, 40, 40);
    if(powerup >= 51 && x3 <= 700 && x1 >= 50  ) {
    x1 += moveX
    x2 += moveX
    x3 += moveX
    
    
  }
  else if (powerup <= 50 && x3 <= 700 && x1 >= 50 ) {
    x1 -= moveX 
    x2 -= moveX
    x3 -= moveX
   
  }
  }  
  
  if (press === 1) {
    player1 = 0
    keyCode = 0
     x1 = 270;
    x2 = 360;
    x3 = 450;
  }
}
 
 text(player1, 40, 40)
}

 if (player2 === 1) {
  if (keyCode === 48) {

  if (press === 1){
   fill(240); 
   rect(0,0, 800, 600);
   fill(0)
   text(player2, 750, 40);  
    if(powerup >= 51 && x3 <= 700 && x1 >= 50  ) {
    x1 += moveX
    x2 += moveX
    x3 += moveX
    
    
  }
  else if (powerup <= 50 && x3 <= 700 && x1 >= 50 ) {
    x1 -= moveX 
    x2 -= moveX
    x3 -= moveX
   
  }  
 }  
if (press === 2) {
    player2 = 0
    keyCode = 0
    x1 = 270;
    x2 = 360;
    x3 = 450;
  }
 }
 text(player2, 750, 40)
 }
text(player1, 40, 40)
 if (player1 === 2) {
   if (mouseX > x1 && mouseX < x1 + 80 && mouseY > y1 - 90 && mouseY < y1 - 10 && vak11 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak11 = 1
      press = 2
      wait = 0
    }
    
    
    fill(150);
    rect(x1, y1 - 90, 80, 80, 20);
   }
     if (mouseX > x1 - 90 && mouseX < x1 - 10 && mouseY > y1 - 90 && mouseY < y1 - 10 && vak12 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak12 = 1
      press = 2
      wait = 0
    }
    
    
    fill(150);
    rect(x1 - 90, y1 - 90, 80, 80, 20);
   }
   if (mouseX > x1 - 90 && mouseX < x1 - 10 && mouseY > y1 && mouseY < y1 + 80 && vak13 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak13 = 1
      press = 2
      wait = 0
    }
    
    
    fill(150);
    rect(x1 - 90, y1, 80, 80, 20);
   }
   if (mouseX > x3 && mouseX < x3 +80  && mouseY > y1 - 90 && mouseY < y1 - 10 && vak31 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak31 = 1
      press = 2
      wait = 0
    }
    
    
    fill(150);
    rect(x3 , y1 - 90, 80, 80, 20);
   }
   if (mouseX > x3 + 90 && mouseX < x3 + 170  && mouseY > y1 - 90 && mouseY < y1 - 10 && vak32 === 0) {
    if (mouseIsPressed === true && press === 1 && wait >= 15) {
      vak32 = 1
      press = 2
      wait = 0
    }
    
    
    fill(150);
    rect(x3 , y1 - 90, 80, 80, 20);
   }
 }


}


 
//----------
 
// function keyPressed () {
//   if (player1 === 1 && keyCode === 49 && press === 2) {
  
     
//       fill(200)
//       rect(0, 0, 800, 600);
     
    
//   }
// }
  
// function keyReleased () {
//    if (keyCode === 49 && press === 2) {
  
     
//       fill(200)
//       rect(0, 0, 800, 600);
     
    
// }
// }
// function keyReleased () {
//  if (player1 === 1) {
//     if (keyCode === 49 && press === 2) {
//      if (wait >= 1){
//       fill(200)
//       rect(0, 0, 800, 600);
//      }
//     }
//   }
//   }
// function mouseClicked () {
//   if (mouseButton === LEFT && press === 1) {
//     press = 2
//   }
//   else if (mouseButton === LEFT && press === 2) {
//     press = 1
//   }
//   if 

