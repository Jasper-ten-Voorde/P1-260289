let ballen = []
let aantal = 20

function setup() {
  createCanvas(400, 400);
    for(let i = 0; i < aantal; i++) {
     let bal = {};
     bal.X = random(0, width);
     bal.Y = random(0, height);
     bal.size = random(10, 50);
     bal.Xspeed = random(-5, 5);
     bal.Yspeed = random(-5, 5);
    //  bal.col = randomcolour();
     
     ballen.push(bal);
    }
}

function randomcolour() {
  
}

function draw() {
  background(30, 40 , 90);
  for(let i = 0; i < ballen.lenght; i++) {
    updateBal[i]();
    drawBal[i]();
  }
}

function updatBal() {
  ballen.X + ballen.Xspeed
  ballen.Y + ballen.Yspeed
}
function drawBal(){
  fill(255, 255, 0)
  circle(ballen.X, ballen.Y, ballen.size)
}
