function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0, 50, 70);
  fill(30);
  strokeWeight(0);
  rect(600, 100, 210, 360);
  quad(570, 110, 600, 100, 600, 460, 570, 460);
  fill(10)
  strokeWeight(2) 
  line(600, 100, 600, 460);
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
}
