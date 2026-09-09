function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

let translateX = -400;
let translateY = -150;


function draw() {
  
  background(220);
// dit is het poppertje
  fill(255);
  strokeWeight(10);
  rect(525+translateX, 290+translateY, 50, 100);
  rect(525+translateX, 290+translateY, 50, 100);
  circle(550+translateX, 250+translateY, 100);
  ellipse(520+translateX, 250+translateY, 30, 50);
  ellipse(570+translateX, 250+translateY, 30, 50);
  line(575+translateX, 390+translateY, 600+translateX, 415+translateY);
  line(525+translateX, 390+translateY, 500+translateX, 415+translateY);
  line(520+translateX, 300+translateY, 460+translateX, 300+translateY);
  line(575+translateX, 300+translateY, 640+translateX, 300+translateY);

  fill(0);
  circle(520+translateX, 250+translateY, 10);
  circle(570+translateX, 250+translateY, 10);
  //dit is de text van mijn naam en van de nummers. :O
  textSize(20);
  text('Jasper ten Voorde', 74, 40);
  text('1.', 30, 40);
  text('2.', 30, 320);
  text('Vlag ', 74, 320);
  text('3.', 30, 480);
  text('Schaakbord', 74, 480);
  text('4.', 340, 40);
  text('Stoplicht', 384, 40);
  text('5.', 340, 300);
  text('TRANSparant Huis', 370, 300)
  text('6.', 540, 40);
  text('Dobbelsteen', 585, 40);

  //vlag woah :P (im very very gay)
  strokeWeight(0)
  fill(214, 2, 112);
  rect(70, 330, 160, 40);

  fill(155, 79, 150);
  rect(70, 370, 160, 20);
 
  fill(0, 56, 168);
  rect(70, 390, 160, 40);

  //dit is het schaakbord >:3
  fill(0);
  rect(70, 490, 30, 30);
  rect(130, 490, 30, 30);
  rect(100, 520, 30, 30);
  rect(70, 550, 30, 30);
  rect(130, 550, 30, 30);
  strokeWeight(4);
  line(70, 490, 160, 490);
  line(70, 580, 160, 580);
  line(70, 490, 70, 580);
  line(160, 490, 160, 580);
  strokeWeight(0)


  fill(255)
  rect(100, 490, 30, 30);
  rect(70, 520, 30, 30);
  rect(130, 520, 30, 30);
  rect(100, 550, 30, 30);
  


  
  
//stoplicht
  fill(90);
  strokeWeight(0);
  rect(815+translateX, 300+translateY, 40, 100);
  rect(800+translateX, 200+translateY, 70, 160);
  fill(200, 0, 0);
  circle(835+translateX, 230+translateY, 40);
  fill(200, 100, 0);
  circle(835+translateX, 280+translateY, 40);
  fill(0, 200, 0);
  circle(835+translateX, 330+translateY, 40);


  //TRANS-parant huis
  fill(91,207,251)
  strokeWeight(0);
  triangle(430, 310, 478, 355, 383, 355);
  rect(380, 450, 101, 50)
  fill(245, 171, 185);
  quad(478, 355, 383, 355, 360, 380, 497, 380);
  rect(380, 420, 101, 30);
  fill(255);
  rect(380, 380, 101, 40);
  
  noFill();
  strokeWeight(4);
  triangle(360, 380, 500, 380, 430, 310);
  rect(380, 380, 100, 120);
   
//dobblesteen
  strokeWeight(1);
  fill(200, 0, 0);
  triangle(650, 60, 610, 120, 690, 120);
  fill(190,0,0);
  triangle(650, 60, 690, 120, 695, 70);
  triangle(650, 60, 610, 120, 605, 70);
  triangle(610, 120, 690, 120, 650, 150);
  fill(180,0,0);
  triangle(650, 60, 650, 50, 695, 70);
  triangle(650, 60, 650, 50, 605, 70);
  triangle(690, 120, 695, 70, 697, 122);
  triangle(690, 120, 697, 122, 650, 150);
  triangle(650, 150, 610, 120, 603, 122);
  triangle(610, 120, 603, 122, 605, 70);
  fill(255)
  text('20', 639, 102);

  //mario
  fill(255,0 ,0);
  strokeWeight(0);
  rect(640, 260, 60, 10);
  rect(630, 270, 100, 10);
  rect(630, 330, 20, 10);
  rect(660, 330, 40, 10);
  rect(620, 340, 30, 10);
  rect(660, 340, 20, 10);
  rect(690, 340, 30, 10);
  rect(610, 350, 40, 10);
  rect(690, 350, 40, 10);
  rect(630, 360, 10, 10);
  rect(700, 360, 10, 10);

  fill(0)
  rect(690, 280, 10, 20);
  rect(700, 300, 10, 10);
  rect(690, 310, 40, 10);


  fill(123, 63, 0);
  rect(630, 280, 30, 10);
  rect(620, 290, 10, 30);
  rect(640, 290, 10, 20);
  rect(650, 300, 10, 10);
  rect(630, 310, 10, 10);
  rect(690, 400, 30, 10);
  rect(690, 410, 40, 10);
  rect(610, 410, 40, 10);
  rect(620, 400, 30, 10);

  fill(241,194,125);
  rect(630, 290, 10, 20);
  rect(650, 290, 40, 10);
  rect(660, 280, 30, 10);
  rect(660, 300, 40, 10);
  rect(640, 310, 50, 10);
  rect(640, 320, 80, 10);
  rect(710, 300, 30, 10);
  rect(700, 290, 30, 10);
  rect(700, 280, 10, 10);
  rect(610, 360, 20, 10);
  rect(710, 360, 20, 10);
  rect(610, 370, 30, 10);
  rect(700, 370, 30, 10);
  rect(610, 380, 20, 10);
  rect(710, 380, 20, 10);
  
  fill(0, 60, 255);
  rect(650, 330, 10, 30);
  rect(680, 340, 10, 20);
  rect(660, 350, 20, 10);
  rect(660, 360, 20, 10);
  rect(640, 360, 10, 10);
  rect(690, 360, 10, 10);
  rect(640, 370, 60, 10);
  rect(630, 380, 80, 10);
  rect(630, 390, 30, 10);
  rect(680, 390, 30, 10);

  fill(255, 255, 0)
  rect(650, 360, 10, 10)
  rect(680, 360, 10, 10);

  
  


}

