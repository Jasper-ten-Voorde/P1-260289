function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  myfont = loadFont('PixelOperator8Bold.ttf')
}

let translateX = -400;
let translateY = -150;
function draw() {
  
  background(199,227,242);
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
  textFont('arial')
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
  text('7.', 580, 250);
  text('Mario', 645, 250);
  text('8.', 760, 85);
  text('Kris Dreemurr',800, 85);
  text('9.', 750, 460);
  text('Album', 780, 460)

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
  rect(270, 100, 10, 5);
  rect(270, 110, 10, 5);
  rect(270, 120, 10, 5);
  rect(270, 130, 10, 5);
  rect(270, 140, 10, 5);
  rect(270, 150, 10, 5);
  rect(270, 160, 10, 5);
  rect(270, 170, 10, 5);
  rect(270, 180, 10, 5);
  rect(270, 190, 10, 5);
  rect(270, 200, 10, 5);
  rect(270, 210, 10, 5);
  rect(270, 220, 10, 5);
  rect(270, 230, 10, 5);
  rect(270, 240, 10, 5);
  rect(270, 250, 10, 5);
  rect(270, 260, 10, 5);
  rect(270, 270, 10, 5);
  rect(270, 280, 10, 5);
  rect(270, 290, 10, 5);
  rect(270, 300, 10, 5);
  


  
  
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
  //dit is het trans gedeelte
  fill(91,207,251)
  strokeWeight(0);
  triangle(430, 310, 478, 355, 383, 355);
  rect(380, 450, 101, 50)
  fill(245, 171, 185);
  quad(478, 355, 383, 355, 360, 380, 497, 380);
  rect(380, 420, 101, 30);
  fill(255);
  rect(380, 380, 101, 40);
  //dit is hui huis gedeelte
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
  //rode pet en tshirt
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
//ogen en snoor
  fill(0)
  rect(690, 280, 10, 20);
  rect(700, 300, 10, 10);
  rect(690, 310, 40, 10);

//dit is het haar
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
//dit is de huid
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
  //het blauwen overhaul.
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
//the yellow buttons
  fill(255, 255, 0)
  rect(650, 360, 10, 10)
  rect(680, 360, 10, 10);

  //kris deltarune >:P
   //rode sjaal
  fill(235,0,149)
  rect(815, 200, 45, 20);
  rect(805, 210, 40, 20);
  rect(800, 220, 30, 20);
  //de huid
  fill(17,251,237)
  rect(855, 140, 10, 55);
  rect(865, 165, 5, 30);
  rect(870, 170, 15, 20);
  rect(885, 175, 10, 10);
  rect(810, 245, 10, 5);
  rect(810, 250, 10, 15);
  rect(805, 250, 5, 20);
  rect(890, 225, 10, 10);
  rect(895, 230, 10, 10);
  
  //het hartje
  fill(255,0,0);
  rect(925, 170, 5, 15);
  rect(920, 165, 5, 15);
  rect(930, 165, 5, 15);
  rect(935, 165, 5, 10);
  rect(915, 165, 5, 10);

  //schaduw
  fill(106,123,196);
  rect(865, 155, 40, 10);
  rect(870, 165, 30, 5);
  rect(885, 170, 15, 5);
  rect(800, 260, 5, 30);
  rect(805, 270, 5, 10);
  rect(805, 285, 5, 5);
  rect(810, 280, 5, 5);
  rect(830, 235, 5, 15);
  rect(835, 250, 5, 5);
  rect(840, 255, 15, 5);
  rect(855, 250, 5, 5);
  rect(860, 245, 5, 5);
  rect(865, 235, 5, 10);
  rect(870, 215, 5, 20);
  rect(860, 195, 10, 15);
  rect(820, 195, 40, 5);
  rect(815, 200, 5, 5);
  rect(810, 205, 5,5);
  rect(805, 210, 5, 5);
  rect(800, 220, 5, 5);
  rect(800, 230, 5, 5);
  rect(810, 235, 10, 5);
  rect(820, 230, 10, 5);
  rect(830, 225, 10, 5);
  rect(840, 220, 10, 5);
  rect(850, 215, 5, 5);
  rect(855, 210, 5, 5);
  rect(805, 225, 10, 5);
  rect(815, 220, 5, 5);
  rect(820, 215, 10, 5);
  rect(830, 210, 10, 5);
  rect(840, 205, 10, 5);
  rect(850, 200, 5, 5);
  rect(895, 220, 5, 5);
  rect(900, 225, 5,5 );
  rect(905, 230, 5,5 );
  rect(905, 215, 5, 10);
  rect(910, 205, 5, 25);
  rect(915, 205, 10, 15);
  rect(920, 200, 20, 10);
  rect(815, 330, 5, 5);
  rect(810, 340, 5, 20);
  rect(810, 355, 30, 5);
  rect(835, 330, 5, 25);
  rect(870, 330, 10, 10);
  rect(880, 330, 5,5);
  rect(875, 340, 5, 20);
  rect(875, 355, 40, 5);
  rect(875, 350, 25, 5);
  rect(885, 345,10,5);
  rect(890, 340, 5, 5);

  
//haar en  kleren
  fill(11,11,59);
  rect(830, 100, 40, 50);
  rect(835, 95, 5,5);
  rect(870, 105, 10, 55);
  rect(870, 160, 5, 5);
  rect(865, 150, 5, 10);
  rect(860, 150, 5, 5);
  rect(855, 150, 5, 10);
  rect(850, 150, 5, 45);
  rect(880, 110, 10, 45);
  rect(880, 155, 5, 5);
  rect(890, 115, 5, 45);
  rect(895, 120, 5, 45);
  rect(900, 130, 5, 45);
  rect(905, 135, 5, 35);
  rect(895, 175, 5, 5);
  rect(890, 180, 5, 5);
  rect(880, 185, 10, 5);
  rect(870, 190, 25, 5);
  rect(865, 185, 5, 5);
  rect(860, 175, 5, 20);
  rect(855, 170, 5, 20);
  rect(820, 95, 10, 5 );
  rect(820, 105, 10, 90);
  rect(830, 105, 20,90);
  rect(815, 115, 5, 75);
  rect(810, 120, 5 ,70);
  rect(805, 130, 5, 55);
  rect(800, 140, 5, 50)
  rect(795, 160, 5, 20);
  rect(790, 180, 5, 5);
  rect(815, 195, 10, 5);
  rect(810, 200, 5, 5);
  rect(805, 205, 5,5);
  rect(800, 210, 5, 10)
  rect(795, 220, 5, 15);
  rect(800, 235, 10, 5);
  rect(805, 240, 15, 5);
  rect(820, 235, 10, 20);
  rect(805, 245, 5,5);
  rect(800, 250, 5, 15);
  rect(795, 260, 5, 30)
  rect(800, 290, 15, 5);
  rect(815, 275, 5, 15);
  rect(810, 265, 5, 10);
  rect(815, 255, 5, 10);
  rect(825, 255, 15, 5);
  rect(830, 250, 5, 5);
  rect(830, 260, 10, 70);
  rect(825, 275, 5, 55);
  rect(820, 295, 5, 35);
  rect(815, 310, 5, 20)
  rect(810, 330, 5, 10);
  rect(805, 340, 5, 20)
  rect(805, 360, 40, 5);
  rect(840, 260, 5, 105);
  rect(845, 260, 5, 55);
  rect(850, 260, 5, 25);
  rect(855, 255, 5, 45);
  rect(860, 250, 5, 65);
  rect(865, 245, 5, 95);
  rect(870, 235, 5, 95);
  rect(870, 340, 5, 20);
//HEAD

  

  rect(870, 360, 50, 5);
  rect(915, 350, 5, 10);
  rect(910, 345, 5, 5);
  rect(900, 340, 10, 5);
  rect(895, 330, 5, 10);
  rect(890, 315, 5, 15);
  rect(885, 295, 5, 35);
  rect(880, 280, 5, 50);
  rect(875, 270, 5, 60);
  rect(880, 205, 5, 40);
  rect(875, 230, 5, 15);
  rect(885, 210, 5, 25);
  rect(890, 215, 15, 5);
  rect(875, 200, 5, 60);
  rect(870, 200, 5, 15);
  rect(865, 195, 5, 10);
  rect(895, 195, 10, 5);
  rect(900, 200, 5,5);
  rect(905, 205, 5, 10);
  rect(890, 220, 5,5);
  rect(890, 235, 5, 5);
  rect(895, 240, 10, 5);
  rect(905, 235, 5, 5);
  rect(910, 230, 5, 5);
  rect(915, 220, 5, 10);
  rect(920, 215, 5, 5);
  rect(925, 210, 10, 5);
  rect(935, 205, 5, 5);
  rect(940, 190, 5, 15);
  rect(930, 190, 10, 5);
  rect(920, 195, 10, 5);
  rect(915, 190, 5, 5);
  rect(910, 195, 5, 10);
  rect(860, 210, 10 ,5);
  rect(855, 215, 5, 5);
  rect(850, 220, 5, 5);
  rect(840, 225, 10, 5);
  rect(830, 230, 10, 5);


  //album

  fill(0);
  rect(780, 470, 200, 200);
  fill(255)
  textFont(myfont);
  textSize(17)
  text('UNDERTALE',805, 550);
  textSize(13)
  text('Soundtrack', 816, 590);
}
