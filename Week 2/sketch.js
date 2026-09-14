function setup() {
  createCanvas(800, 600);
  background(220);
}

let Xposition1 = 200
let Xposition2 = 0
let Yposition1 = 200
let Yposition2 = 200
let Yposition3 = 230
let Xposition3 = 0

let carsize = 20
let distance = carsize + 10
function draw() {
  background(220);
 let car1 = rect(0+Xposition1, 0+Yposition1, carsize, carsize);
  let car2 = rect(0+Xposition2, 0+Yposition2, carsize, carsize);
  
 
  
  Xposition1 += 2
  

   if (Xposition2 > Xposition1) {

    Xposition2 += 3
    
   }
   else if (Xposition2 >= Xposition1 - distance && Yposition2 <= Yposition1 + 30) {

    Xposition2 += 0.5
    Yposition2 += 2
   }
   else {

    Xposition2 += 3
   }
  
  
   if(Xposition2 > 825){

     Xposition2 = 0
     Yposition2 = 200
   }
   if (Xposition1 > 890) {
    Xposition1 = 0
    if (Xposition2 = 830) {
      Yposition2 = 830
      
    }
   }
}









// let X1 = 200
// let X2 = 0
// let Y2 = 200
// let X3 = 0
// let Y3 = 175


// function draw() {
  
//   rect(0+X1, 200, 20, 20);
//   rect(0+X2, 0+Y2, 20, 20);
//   rect(0+X3, 0+Y3, 20, 20);
  
 
//  if (X2 >= X1 - 25) {

//     X2 += 1
//     X1 += 2
//    }
//    else {
//     X2 += 3
//     X1 += 2
//    }

// if (X1 = 825) {
//   X1 = 200
// }
// if (X2 = 825) {
//   X2 = 0
// }
// }
  
  

