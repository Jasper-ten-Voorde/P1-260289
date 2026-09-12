function setup() {
  createCanvas(800, 600);
}

let Xposition1 = 200
let Xposition2 = 0

function draw() {
  background(220);
 let car1 = rect(0+Xposition1, 200, 20, 20);
  let car2 = rect(0+Xposition2, 200, 20, 20);
  
 
  
  Xposition1 += 2
  

   if (Xposition2 >= Xposition1 - 25) {

    Xposition2 += 1
   }
   else {

    Xposition2 += 3
   }
  
  
}
