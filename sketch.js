var baloon,Baloon;
var background,Background;
function preload(){
   Background = loadImage("pro-C35 images/_Hot Air Baloon-01.png");
   Baloon = loadImage("pro-C35 images/_Hot Air Baloon-02.png","pro-C35 images/_Hot Air Baloon-03.png","pro-C35 images/_Hot Air Baloon-04.png");
}

function setup() {
  database= firebase.database();
  createCanvas(500,500);

 baloon = createSprite(400, 200, 50, 50);
 baloon.addImage(Baloon);
}

function draw() {
  background.addImage(Background); 
  if(position !== undefined);
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,+1);
  }
  drawSprites();
}
function writePosition(x,y){
  database.ref('baloon/position').set({
    'x': position.x = x,
    'y': position.y = y
  })
}