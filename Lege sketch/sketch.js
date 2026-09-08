function setup() {
  createCanvas(600, 400);
}

function draw() {
  //dit zijn de lijnen van de mondriaan.
  background(255);
  strokeWeight(4);
  fill(0);
  line(1, 75, 450, 75);
  line(100, 1, 100, 400);
  line(450, 1, 450, 400);
  line(1, 250, 600, 250);
  line(200, 400, 200, 600);
  line(1, 200, 100, 200);
  line(1, 125, 600, 125);
  line(1, 350, 550, 350);
  line (550, 1, 550, 400);
  line(500, 125, 500, 250);
  line(260, 1, 260, 250);
  line(230, 250, 230, 400);
  line(230, 275, 100, 275);
  line(330, 250, 330, 400);
  line(330, 290, 600, 290);
  line(1, 1, 599, 1);
  line(599, 1, 599, 399);
  line(599, 399, 1, 399);
  line(1, 399, 1, 1);
  
  //dit zijn de rode rechthoeken. :3
  strokeWeight(0);
  fill(255, 0, 0);
  rect(3, 3, 95, 70);
  rect(102, 127, 156, 121);
  rect(232, 352, 96, 45);
  rect(332, 252, 116, 36);
  rect(3, 352, 95, 45);
  rect(552, 3, 45, 120);

  //dit zijn de blauwen rechthoeken >w<
  fill(0, 0, 255);
  rect(262, 127, 186, 121);
  rect(502, 127, 46, 121);
  rect(452, 292, 96, 56);
}
