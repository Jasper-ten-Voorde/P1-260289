function setup() {
  createCanvas(400, 200);
}


function draw() {
  background(220);
  textSize(30)
  let score = random(0, 100)
  noLoop()
  if (score >= 90) {
    fill(0, 255, 0);
    text('Uitstekend', 100, 100);
  }
  else if (score >= 70) {
    fill(255,255,0);
    text('Goed gedaan', 100, 100);

  }
  else if (score >= 50) {
    fill(255, 100, 0)
    text('Voldoende', 100, 100)
  }
  else {
    fill(255, 0,0)
    text('Onvoldoende',100, 100 )
  }
  
}
