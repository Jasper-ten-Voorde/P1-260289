function setup() {
  createCanvas(400, 400);
}
//variabelen met waardens
let y = 80
 let x = 100
 let a = 20
 let b = 10
function draw() {
  background(220);
 //text die de waarde x neer zet
  text(x, 20, 20);
 text('Hello world', 20, 60);
 //variabel een text van de som 20 + 10
 let optellen = a + b
 text ('Optellen: ' + optellen, 20, y);
 noLoop(y = y + 20)
 //variabel en text van de som 20 - 10
 let aftreken = a - b
 text('Aftreken: ' + aftreken, 20, y);
 noLoop(y = y + 20)
//variebel en text van de som 20 * 10
 let vermenigvuldigen = a * b
 text('vermenigvuldigen: '+ vermenigvuldigen, 20, y);
 noLoop(y = y + 20)
 //variabel en text van de som 20 / 10
 let delen = a / b
 text('delen: ' + delen, 20, y);
 

}
