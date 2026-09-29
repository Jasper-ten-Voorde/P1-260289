function setup() {
  createCanvas(800, 400);
  background(220);
}

function draw() {

let x = 20
fill(0);
text("1." ,20, 15);
 for(let j = 0; j < 9; j++) {
  if(j === 6){
    fill(0, 0, 255);
    square(x, 20, 50);
    x += 50
  }
  fill(255);
  square(x, 20, 50);
  x += 50
 
 }
 fill(0);
 text('2.', 20, 105);
 y1 = 110
 coll = 0
 for(let i = 0; i < 5; i++) {
  fill(coll);
  square(20, y1, 50);
  y1 += 50
  coll += 60
 }

 fill(0);
 text('3.', 80, 105);
 x2 = 80;
 grn = 0;
 breed = 25;
 for(let l = 0; l < 4; l++) {
 fill(0, grn, 0);

 }

}
