function setup() {
  createCanvas(380, 350);
  background(220);
}

function draw() {
  let colors = ["red", "green", "blue", "purple", "yellow"]
  let getallen =[400, 240, 10, 490, 30, 60, 244, 500, 301, 300]
  let plus = [3, 55, 93, 20, 102, 6]
  let plus1 = [14, 22, 80, 5]
  fill(0);
  text("1.", 20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text('7.', 120, 190);
  text("8.", 120, 280);
  text("9.", 240, 150);
   g = 0;
   y = 15;
  for(let i = 0; i < colors.length; i++) {
    fill(colors[g]);
    text(colors[g], 35, y);
    g++;
    y += 15;
  }
 
  y1 = 100;
  g1 = 0
  colors.shift();
  colors.push("red")
  for(let j = 0; j < colors.length; j++) {
    
    fill(colors[g1]);
    text(colors[g1], 35, y1);
    g1++;
    y1 += 15
 
  }
  y2 = 190;
  g2 = 0;
  colors.splice(1, 2);
  for(let k = 0; k < colors. length; k++) {
    fill(colors[g2]);
    text(colors[g2], 35, y2);
    g2++;
    y2 += 15
  }
  y3 = 250;
  g3 = 0;
  for(let l = 0; l < getallen.length; l++) {
    if (getallen[g3] < 300) {
     fill(0);
     text(getallen[g3], 35, y3)
     y3 += 15
    }
    g3++
    
  }


 
 

}

