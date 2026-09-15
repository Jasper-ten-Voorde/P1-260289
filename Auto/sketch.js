function setup() {
  createCanvas(800, 600);
  background(220);
}
//-----------------------
let Xposition1 = 200
let Xposition2 = 0
let Yposition1 = 200
let Yposition2 = 200
let Yposition3 = 230
let Xposition3 = 0
//--------------------------
let carsize = 20
let distance = carsize + 40
//--------------------------
function draw() {
  background(220);
  Xposition1 += 1
  Xposition3 += 2
 //---------
 fill(255, 0,0);
 rect(0+Xposition1, 0+Yposition1, carsize, carsize);
 fill(255, 255,0);
 rect(0+Xposition2, 0+Yposition2, carsize, carsize);
 fill(255, 255,255);
 rect(0+Xposition3, 0+Yposition3, carsize, carsize);
  
 
 //--------------------------
  
 
 //-------------------------- 

  //------
  if (Xposition2 >= Xposition1 - distance) {
    Xposition2 += 3
    Yposition2 += 2
   } 
   else if (Xposition2 >= Xposition3 - distance) {
    Xposition2 += 3
    Yposition2 -= 2
   }
   
  else if (Xposition2 >= Xposition3 - distance && Xposition2 >= Xposition1 - distance) {
    Xposition2 += 1
    Yposition2 += 0
   }
    
   else if (Xposition2 >= Xposition1 - distance && Yposition2 <= Yposition3 - 30) {

    Xposition2 += 3
    Yposition2 += 2
   }
   else if (Xposition2 >= Xposition1 - distance && Yposition2 == Yposition1 || Xposition2 >= Xposition3 - distance && Yposition2 == Yposition3) {

    Xposition2 += 2
    
   }
   else if (Xposition2 < Xposition1 - distance && Yposition2 == Yposition1 || Xposition2 < Xposition3 && Yposition2 == Xposition3) {
    Xposition2 += 3
   }
   
    else {

    Xposition2 += 3
   }
   //------------------------------

   

   //------------------------------
   if (Xposition3 >= 820) {
    
    Xposition3 = 30
   
   }
   //------------------------------
   if (Yposition2 >= 230) {
    Yposition2 = 230
   }
   if (Yposition2 <= 200) {
    Yposition2 = 200
   }
   if(Xposition2 > 825 && Yposition2 <= 200) {

     Xposition2 = 0
     Yposition2 = 200
   }
   else if (Xposition2 > 825 && Yposition2 >= 230) {
    Xposition2 = 0
    Yposition2 = 230
   }
   //------------------------------
   if (Xposition1 > 890) {
    Xposition1 = 0
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
  
  

