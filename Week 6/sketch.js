let imgguy;
let playing = false;
//draining
let hungry = 0.01;
let energydrain = 0.012
let dirty = 0.01
let Mental = 0
//----
let room = 0
//appliance
let appliimg = ["essentials/assets/betterfridge.png", 'essentials/assets/shower.png', 'essentials/assets/bed.png']
let applifunc = [openfri, onshower, onbed]
let fridgeopen = false
let showeron = false
let sleeping = false
let applibut = [];
//food
let foodsimg = ['essentials/assets/pizza.png', 'essentials/assets/sushi.png', 'essentials/assets/monster.png']
let foodsfunc = [givePiz, giveSuh, giveMon]
let foodhov = [hovPiz, hovSuh, hovMon]
let foodbutton = []
let food;
let eating = false;
let button;
let monhov = false;
let pizhov = false;
let suhhov = false;
//arrows
let arrowimg = ['essentials/assets/arrow.png', 'essentials/assets/arrow_ri.png']
let arrowfunc = [arRight, arLeft];
let barrow;
let arrowbut = [];
//pet
let pet = {
  name: 'guy',
  hunger: 100,
  energy: 100,
  dirtiness: 100,
  health: 100,
  mentalhealth: 100,
}

function preload() {
loadImage('essentials/assets/pizza.png');
loadImage('essentials/assets/sushi.png');
loadImage('essentials/assets/monster.png')
loadImage('essentials/assets/bed.png');
sleepimg = loadImage('essentials/assets/tamagotchi_sleep.png')
idlegif = loadImage('essentials/assets/tamagotchi_idle.gif');
enidlegif = loadImage('essentials/assets/tamagotchi_idle_energy.gif');
deathgif = loadImage('essentials/assets/tamagotchi_death.gif');
eatgif = loadImage('essentials/assets/tamagotchi_eaten_loop.gif');
friidge = loadImage("essentials/assets/betterfridge.png");
loadImage('essentials/assets/arrow.png')
loadImage('essentials/assets/arrow_ri.png')
}

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < foodsimg.length; i++) {
  let food = createImg(foodsimg[i]); 
  food.position(210, 200 + i * 100);
  food.style('width', '100px');
  food.style('height', '100px');
  food.mousePressed(foodsfunc[i]);
  food.mouseOver(foodhov[i]);
  food.hide();
  foodbutton.push(food);
}
  // for (let i = 0; i < foodsimg.length; i++) {
  //  food = createImg(foodsimg[i])
  //  food.position(210, 200 + i*100);
  //  food.mousePressed(foodsfunc[i]);
  //  food.style('width', '100px');
  //  food.style('height', '100px')
  //  food.mouseOver(foodhov[i]);
  //  food.mouseOut(foodhov[i])
  //  food.hide();
  //  foodbutton.push(food);
   
  // }
  
  

  for (let i = 0; i < appliimg.length; i++) {
   button = createImg(appliimg[i]);
   button.position(10, 200);
   button.mousePressed(applifunc[i])
   button.style('width', '200px');
   button.style('height', '400px')
   applibut.push(button);
   if (i === 1) {
    applibut[1].hide();
    button.style('width', '400px');
   button.style('height', '800px')
   button.position(220, -30);
   }
   if (i === 2) {
    button.position(20, 100);
   }

  }
for (let i = 0; i < arrowimg.length; i++) {
     barrow = createImg(arrowimg[i]);
     barrow.mousePressed(arrowfunc[i]);
     barrow.style('width', '60px');
     barrow.style('height', '60px');
     if (i === 0) {
      barrow.position(740, 370);
     }
     else {
      barrow.position(0, 370);
     }
    arrowbut.push(barrow);
     


  }

//     if (getItem("pet") == null) {
//     pet.hunger = 100;
//     pet.dirtiness = 100;
//     pet.energy = 100;
//     pet.mentalhealth = 100;
//    } else {
//     pet = getItem("pet");
// }
if (getItem("pet") == null) {
    pet = {
        name: 'guy',
        hunger: 100,
        energy: 100,
        dirtiness: 100,
        health: 100,
        mentalhealth: 100
    };

    storeItem("pet", pet);
} else {
    pet = getItem("pet");
}

}

function draw() {
  background(220);
  strokeWeight(0);
  fill(238,192,123);
  rect(10, 60 ,pet.hunger, 40);
  fill(0, 255, 0);
  rect(10, 10, pet.health, 40);
  fill(186, 239, 245);
  rect(150, 60, pet.energy, 40);
  fill(23, 71, 0);
  rect(150, 10, pet.mentalhealth, 40);
  fill(150, 75, 0);
  rect(290, 10, pet.dirtiness, 40);
  fill(255, 0, 0)
  rect(105, 55, 5, 50);
  fill(0);
  textSize(15);
  text('health:', 15, 35);
  text(round(pet.health), 65, 35);
  text('hunger:', 15, 85);
  text(round(pet.hunger), 70, 85);
  text('Mental hp:', 153, 35);
  text(round(pet.mentalhealth), 222, 35);
  text('Energy:', 155, 85);
  text(round(pet.energy), 210, 85);
  text('Dirtiness:', 295,35);
  text(round(pet.dirtiness), 360, 35)
  //--------------------------------------------
  
  //---------------------------------------------
  //gif
  
  if(eating === false && pet.health >= 1 && pet.energy <= 100 && sleeping === false) {
  image(idlegif, 100, 0, width, height);
  }
  else if(eating === false && pet.health >= 1 && pet.energy > 100 && sleeping === false) {
   image(enidlegif, 100, 0, width, height);
  }
  if(eating === true && pet.health >= 1 && sleeping === false) {
    image(eatgif, 100, 0, width, height);
  }
  if(sleeping === true) {
    image(sleepimg, 20, 100, 200, 400);
     applibut[2].style('opacity', '0');
     pet.energy += 1
  }
  else if(sleeping === false) {
    applibut[2].style('opacity', '100');
  }
  //
  if(monhov === true) {
   fill(0 , 255 , 255);
   text("Monster", 300, 430);
   text('Hunger + 10', 300, 445);
   text('Energy + 40', 300, 460);
  }
  if(pizhov === true) {
     fill(0 , 255 , 255);
    text("Pizza", 300, 225);
    if(pet.hunger >= 120) {
     
     text('Hunger + 20', 300, 240);
     text('Energy ----', 300, 255);
    }
    else if(pet.hunger >= 100 && pet.hunger <= 120) {
    fill(0 , 255 , 255);
     text('Hunger + 20', 300, 240);
     text('Energy ----', 300, 255);
    }
    else {
    text('Hunger + 20', 300, 240);
     text('Energy + 10', 300, 255);
    }
  }
  if(suhhov === true) {
    fill(0 , 255 , 255);
    text("Sushi", 300, 325);
   if(pet.hunger > 115) {
     text('Hunger + 25', 300, 340);
     text('Energy ----', 300, 355);
   }
   else if(pet.hunger >= 100 && pet.hunger <= 115) {
    text('Hunger + 25', 300, 340);
     text('Energy ----', 300, 355);
   }
   else {
    text('Hunger + 25', 300, 340);
     text('Energy + 5', 300, 355);
   }
  }
  //-------------------------------------
if (showeron === true) {
   fill(0, 0, 255, 125);
   water += 10
    rect(400, 120, 200, water)
    pet.dirtiness += 1
}
else if(showeron === false) {
  water = 0;
}
  
  //--------------------------------------
  //health stays at 0
  if(pet.health <= 0) {
    pet.health = 0
     image(deathgif, 100, 0, width, height);
     
     
  }
  //mentalhealth drain
  if (pet.mentalhealth <= 0) {
    pet.mentalhealth = 0 
    hungry = 0.1
    dirty = 0.01
  }
  pet.mentalhealth -= Mental
//dirty run
pet.dirtiness -= dirty
if (pet.dirtiness <= 0) {
  pet.dirtiness = 0
  pet.mentalhealth -= 0.07
}
else if(pet.dirtiness >= 100) {
  pet.dirtiness = 100
}
else {
 pet.dirtiness -= dirty
}

  //----
   if (pet.energy <= 0 && pet.dirtiness <= 0) {
    mentalhealth -= 1
   }
  //----

//energy drain
 if (pet.energy <= 0) {
  pet.energy = 0
  pet.mentalhealth -= 0.05
  hungry = 0.1
 }
 else if(pet.energy >= 200) {
  pet.energy = 200
  pet.energy -= energydrain
 }
 else if(pet.energy <= 40) {
  hungry = 0.04
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
 if (room === 0) {
  arrowbut[1].hide();
  applibut[0].show();
  applibut[1].hide();
  applibut[2].hide();
 }
 if (room === 1 ) {
  applibut[0].hide();
  foodbutton[0].hide();
  foodbutton[1].hide();
  foodbutton[2].hide();
  arrowbut[1].show();
  arrowbut[0].show();
  applibut[1].show();
  applibut[2].hide();
  }
  if(room === 2) {
    arrowbut[0].hide();
    applibut[1].hide();
    applibut[2].show();
 
 
 
  }



  //savingf
   storeItem("pet",pet);
}





function givePiz() {
  console.log("pizza")
  if (pet.health >= 1) {
   if (pet.hunger > 120) {
        hungry = 0.007
        pet.hunger = 140
        pet.health -= 10
        energydrain = 0.02
        eating = true; 
      }
      else if (pet.hunger >= 100 && pet.hunger <= 120 ) {
        pet.hunger += 20
        pet.health -= 5
        hungry = 0.03
        energydrain = 0.01
        eating = true; 
      }
      else {
      pet.energy += 10
      pet.hunger += 20 
      hungry = 0.03
      energydrain = 0.01
      eating = true; 
      }
    }
}
function arRight() {
 room += 1
 showeron = false
}
function arLeft() {
  room -= 1
  showeron = false
}
function giveSuh() {
  console.log("sushi")
  if (pet.health >= 1) {
   if (pet.hunger > 115) {
        hungry = 0.005
        pet.hunger = 140
        pet.health -= 5
        energydrain = 0.03
        eating = true;
      }
      else if (pet.hunger >= 100 && pet.hunger <= 115 ) {
        pet.hunger += 25
        pet.health -= 1
        hungry = 0.012
        energydrain = 0.01
        eating = true;
      }
      else {
      pet.energy += 5
      pet.hunger += 25 
      hungry = 0.01
      energydrain = 0.01
      eating = true;
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
        eating = true;
      }
      else if (pet.hunger >= 100 && pet.hunger <= 120 ) {
        pet.hunger += 10
        pet.health -= 5
        hungry = 0.02
        pet.energy += 40
        energydrain = 0.01
        eating = true;
      }
      else {
      pet.energy += 40
      pet.hunger += 10 
      pet.health -= 2
      hungry = 0.02
      energydrain = 0.01
      eating = true;
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


function onshower() {
  if (showeron === false) {
    showeron = true
    
  }
  else if (showeron === true) {
    showeron = false
  }
}

  function hovPiz() {
    console.log("Pizza")
    if(pizhov === false) {
    pizhov = true
    
   }
   else if(pizhov === true) {
     pizhov = false
     eating = false;
   }

  }
  function hovSuh() {
   console.log("sushi")
   if(suhhov === false) {
    suhhov = true
    
   }
   else if(suhhov === true) {
     suhhov = false
     eating = false;
   }
  }
  function hovMon() {
   if(monhov === false) {
    monhov = true
   }
   else if(monhov === true) {
     monhov = false
     eating = false;
   }

  }
  function onbed() {
    if (sleeping === false) {
      sleeping = true
    }
    else if (sleeping === true) {
      sleeping = false
    }
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

