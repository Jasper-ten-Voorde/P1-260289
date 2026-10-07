let bakimg;

function preload() {
 bakimg = loadImage("background.png")
 
}

function setup() {
   createCanvas(800, 600);
   background(0);
   bakimg.resize(600, 600);
   tint(255, 127);
   image(bakimg, 100, 0,);
   let startbutton = creatbutton();
   startbutton.position(100, 100);
	startbutton.style('background-color', "grey");
	startbutton.style('font-size', '16px');
	startbutton.mousePressed(startbutton);
 
}

function draw() {
   
}
