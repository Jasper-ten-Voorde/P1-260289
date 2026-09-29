function setup() {
  createCanvas(800, 400);
  background(220);
}

function draw() {
// 10 blokjes op een rij
strokeWeight(0);
let x = 20
fill(0);
text("1." ,20, 15);
strokeWeight(1)
 for(let i = 0; i < 9; i++) {
  if(i === 6){
    fill(0, 0, 255);
    square(x, 20, 50);
    x += 50
  }
  fill(255);
  square(x, 20, 50);
  x += 50
 
 }
 // 5 blokjes onder elkaar
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
// 4 blokjes naast elkaar
 fill(0);
 text('3.', 80, 105);
 x2 = 80;
 grn = 0;
 breed = 25;
 for(let i = 0; i < 4; i++) {
 fill(0, grn, 0);
 rect(x2, 110, breed, 50);
 x2 += 25+25 * i
 grn += 63
 breed += 25
 }
// 4 blauwe blokjes naast elkaar 
 fill(0);
 text('4.', 80, 205);
 bl = 252
 x3 = 80
 breed1 = 25
 lang1 = 50
 for(let i = 0; i < 4; i++) {
  fill(0, 0, bl)
  rect(x3, 210, breed1, lang1);
  x3 += 25+25 * i
  bl -= 63
  breed1 += 25
  lang1 += 25
}
x4 = 550
dik = 0;
fill(0)
text('5.', 540, 20);
fill(255);
for(let i = 0; i < 5; i++) {
  strokeWeight(dik);
  circle(x4, 30, 20);
  
  dik += 2
  x4 += 30
}

fill(0);
text('6.', 350, 105);
strokeWeight(1);
col = 0;
big = 250
for(let i = 0; i < 10; i++) {
 if(i === 0 ||i === 2 || i ===4 || i ===6 || i ===8 ){
  fill(255, 0, 0)
  circle(470, 250, big)
 big -= 25
 
 }
 if (i === 1 || i === 3 || i ===5 || i ===7 ||i === 9) {
  fill(255)
  circle(470, 250, big)
  big -= 25
 }
}




}
