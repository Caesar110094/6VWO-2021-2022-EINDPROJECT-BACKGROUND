var allBlocksList = [];
var bg;

function preload(){
  bg = loadImage('bg.jpg');
}


function setup() {
  createCanvas(800, 400);   
  allBlocksList.push(new Block(width + 100,100, 40, 40));
}

function draw() {
  background(bg);
  
  if(frameCount % 60 == 0){
    let y = random(height);
    let vx = random(5);
    allBlocksList.push(new Block(width + 100,y, 40, 40,vx))
  }

  allBlocksList.forEach(b=> b.render());
}