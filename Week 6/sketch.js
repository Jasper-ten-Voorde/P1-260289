let imgguy;
let playing = false;
//draining
let hungry = 0.03;
let energydrain = 0.01
//appliance
let appliimg = ["betterfridge.png"]
let applifunc = [openfri]
let fridgeopen = false
//food
let foodsimg = ['pizza.png', 'sushi.png', 'monster.png']
let foodsfunc = [givePiz, giveSuh, giveMon]
let foodhov = [hovPiz, hovSuh, hovMon]
let foodbutton = []
let food;
let button;

let pet = {
  name: 'guy',
  hunger: 100,
  energy: 100,
  dirtiness: 100,
  happy: 100,
  health: 100,
  mentalhealth: 100
}

function preload() {
loadImage('pizza.png');
loadImage('sushi.png');
loadImage('monster.png')
 imgguy = loadImage("guy1.png");
}

function setup() {
  createCanvas(800, 800);
  for (i = 0; i < foodsimg.length; i++) {
   food = createImg(foodsimg[i])
   food.position(210, 200 + i*100);
   food.mousePressed(foodsfunc[i]);
   food.style('width', '100px');
   food.style('height', '100px')
   food.mouseOver(foodhov[i]);
   food.hide();
   foodbutton.push(food);
  }

  for (i = 0; i < appliimg.length; i++) {
   button = createImg(appliimg[i]);
   button.position(10, 200);
   button.mousePressed(applifunc[i])
   button.style('width', '200px');
   button.style('height', '400px')
   

  }

}

function draw() {
  background(220);
  fill(238,192,123);
  rect(10, 40 ,pet.hunger, 20);
  fill(0, 255, 0);
  rect(10, 10, pet.health, 20);
  fill(186, 239, 245);
  rect(150, 40, pet.energy, 20);
  fill(23, 71, 0);
  rect(150, 10, pet.mentalhealth, 20);
  fill(255, 0, 0)
  rect(105, 35, 5, 30);

  //health stays at 0
  if(pet.health <= 0) {
    pet.health = 0
  }
  //mentalhealth drain
  if (pet.mentalhealth <= 0) {
    pet.mentalhealth = 0 
    hungry = 0.09
  }


//energy drain
 if (pet.energy <= 0) {
  pet.energy = 0
  pet.mentalhealth -= 0.05
  hungry = 0.1
 }
 else {
  pet.energy -= energydrain
 }
//hunger drain
  if(pet.hunger <= 0) {
    pet.hunger = 0
    pet.health -= 0.1
  }
  else {
    pet.hunger -= hungry
  }
 
}
function givePiz() {
  console.log("pizza")
  if (pet.health >= 1) {
   if (pet.hunger >= 120) {
        hungry = 0.01
        pet.hunger = 140
        pet.health -= 10
        energydrain = 0.02
      }
      else if (pet.hunger >= 100 && pet.hunger <= 120 ) {
        pet.hunger += 20
        pet.health -= 5
        hungry = 0.03
        energydrain = 0.01
      }
      else {
      pet.energy += 10
      pet.hunger += 20 
      hungry = 0.03
      energydrain = 0.01
      }
    }
}

function giveSuh() {
  console.log("sushi")
  if (pet.health >= 1) {
   if (pet.hunger >= 125) {
        hungry = 0.005
        pet.hunger = 140
        pet.health -= 5
        energydrain = 0.03
      }
      else if (pet.hunger >= 100 && pet.hunger <= 125 ) {
        pet.hunger += 25
        pet.health -= 1
        hungry = 0.02
        energydrain = 0.01
      }
      else {
      pet.energy += 5
      pet.hunger += 25 
      hungry = 0.02
      energydrain = 0.01
          }
    }
}
function giveMon() {
  console.log("monster")
  if (pet.health >= 1) {
   if (pet.hunger >= 130) {
        hungry = 0.03
        pet.hunger = 140
        pet.health -= 10
        energydrain = 0.02
        pet.energy += 40
      }
      else if (pet.hunger >= 100 && pet.hunger <= 120 ) {
        pet.hunger += 10
        pet.health -= 5
        hungry = 0.03
        pet.energy += 40
        energydrain = 0.01
      }
      else {
      pet.energy += 40
      pet.hunger += 10 
      pet.health -= 2
      hungry = 0.03
      energydrain = 0.01
      }
    }
}
function openfri() {
 if (fridgeopen === false) {
  for (i =0; i < foodbutton.length; i++) {
  foodbutton[i].show();
  }
  fridgeopen = true
}
else if (fridgeopen === true) {
 for (i =0; i < foodbutton.length; i++) {
  foodbutton[i].hide();
  }
  fridgeopen = false
}
  }

  function hovPiz() {
    console.log("Pizza")
  }
  function hovSuh() {
   console.log("sushi")
  }
  function hovMon() {
   text('Monster', 400, 400);
  }
// function mousePressed() {
//   if (pet.health != 0) {
//     //pizza
    
//      if (mouseX >= 200 && mouseX <= 230 && mouseY >= 200 && mouseY <= 230 ) {
      // if (pet.hunger >= 120) {
      //   hungry = 0.06
      //   pet.hunger = 140
      //   pet.health -= 10
      //   energydrain = 0.065
      // }
      // else if (pet.hunger >= 100 && pet.hunger <= 120 ) {
      //   pet.hunger += 20
      //   pet.health -= 5
      //   hungry = 0.08
      // }
      // // else if (pet.hunger >= 80 && pet.hunger <= 100 ) {
      // //   pet.hunger = 100
      // //   pet.energy += 10
      // // }
      // else {
      // pet.energy += 10
      // pet.hunger += 20 
      // hungry = 0.08
      // }
      
//   }
// }
// }

