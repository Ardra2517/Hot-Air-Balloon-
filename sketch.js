var database;
var position;
var balloon;
var balloonImage1,balloonImage2,balloonImage3,balloonImage4;

function preload() {
backgroundImg=loadImage("Hot Air Ballon-01.png");
balloonImage2=loadImage("Hot Air Ballon-02.png");
balloonImage3=loadImage("Hot Air Ballon-02.png");
balloonImage4=loadImage("Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(800,500);
  database=firebase.database();
 
  balloon=createSprite(200,200,40,50);
  balloon.addImage("img",balloonImage4);
  balloon.scale=0.5
  
  var balloonPosition=database.ref('balloon/height');
  balloonPosition.on("value",readHeight,showError)

}

function draw() {
  background(backgroundImg); 
  //image(backgroundImg,200,200,50,50);

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

function updateHeight(x,y){
  database.ref('balloon/height').set({
      'x':height.x + x,
      'y': height.y + y
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
 console.log("Error in writing to the database");
}