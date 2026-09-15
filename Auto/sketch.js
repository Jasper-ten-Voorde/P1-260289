function setup() {
  createCanvas(800, 600);
  background(220);
}
let redX = 200;
let redY = 200;

let yellowX = 0;
let yellowY = 200;

let whiteX = 0;
let whiteY = 230;

let carSize = 20;
let distance = 60;

let changingLane = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  redX += 1;
  whiteX += 2;
  yellowX += 3;

  if (changingLane == 0) {

    if (yellowY == 200) {

      if (redX > yellowX && redX - yellowX < distance) {
        changingLane = 1;
      }

    } else if (yellowY == 230) {

      if (whiteX > yellowX && whiteX - yellowX < distance) {
        changingLane = -1;
      }
    }
  }

  if (changingLane == 1) {
    yellowY += 2;

    if (yellowY >= 230) {
      yellowY = 230;
      changingLane = 0;
    }

  } else if (changingLane == -1) {
    yellowY -= 2;

    if (yellowY <= 200) {
      yellowY = 200;
      changingLane = 0;
    }
  }

  if (redX > 820) {
    redX = 0;
  }

  if (whiteX > 820) {
    whiteX = 0;
  }

  if (yellowX > 820) {
    yellowX = 0;
  }

  fill(255, 0, 0);
  rect(redX, redY, carSize, carSize);

  fill(255, 255, 0);
  rect(yellowX, yellowY, carSize, carSize);

  fill(255);
  rect(whiteX, whiteY, carSize, carSize);
}