var database;
var position;
var balloon;

function preload() {

}

function setup() {
  createCanvas(800,400);
  database=firebase.database();
 
  balloon=createSprite(200,200,40,50);
  
}

function draw() {
  background(255,255,255); 
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
  }

  drawSprites();
}