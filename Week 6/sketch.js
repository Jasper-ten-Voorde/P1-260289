let imgguy;
let playing = false;
let hungry = 0.2;
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

 imgguy = loadImage("guy1.png");
}

function setup() {
  createCanvas(800, 800);
  image(imgguy, 200, 200);
}

function draw() {
  background(220);
  fill(255, 30, 30);
  rect(200, 200, 30, 30)
  fill(255);
  rect(10, 10 ,pet.hunger, 20);
  fill(0, 255, 0);
  rect(10, 40, pet.health, 20);
  fill(255, 0, 0)
  rect(100, 5, 5, 30);
  
  if(pet.health <= 0) {
    pet.health = 0
  }
 
  if(pet.hunger <= 1) {
    pet.hunger = 1
    pet.health -= 0.1
  }
  else {
    pet.hunger -= hungry
  }
 
}

function mousePressed() {
  
    if (mouseX >= 200 && mouseX <= 230 && mouseY >= 200 && mouseY <= 230 && pet.health != 0 ) {
      if (pet.hunger >= 130) {
        
        pet.hunger = 150
        pet.health -= 10
      }
      else if (pet.hunger > 90 && pet.hunger < 100) {
        pet.hunger = 110
        pet.health -= 5
        
      }
      else if (pet.hunger >= 80 && pet.hunger <= 90) {
        pet.hunger = 100
        
      }
      else {
        
      pet.hunger += 20
      }
      
  }
}

