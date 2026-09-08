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
  text('3.', 30, 480);
  text('4.', 340, 40);
  text('5.', 340, 320);

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
  noFill();
  strokeWeight(4);
  triangle(360, 380, 500, 380, 430, 310);
  rect(380, 380, 100, 120);

  fill(91,207,251)
  strokeWeight(0);
  triangle(430, 310, 480, 355, 375, 355)
}

