let arrPerson = [
  ["Max", "Dion", "Hannah", "joana", "jay"],
  ["liora" , "paul", "enrico", "rico", "han"],
  ["jessie", "jurre", "angela", "dessa", "ash"],
  ["slaap", "bed", "dylano", "dylan", "pc"],
  ["hendrik", "jan", "dank", "pan", "ram"]
]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  k = 1;
  let index = 0;
  for(let j= 0; j < 5; j++){
    for(let i = 0; i <5; i++) {
      if(index % 2 == 0) {
       fill(255);
        rect(i*50 + 25, j * 50 + 25, 50);
      }
      else {
        fill(0);
        rect(i*50 + 25, j * 50 + 25, 50);
        
        
      }
      fill(255, 0 ,0)
      text(arrPerson[j][i] , i *50 + 30, j * 50 + 40);
      k++
      index++;
    }
  }
}
