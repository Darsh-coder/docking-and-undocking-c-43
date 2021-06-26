var spacecraft1img,spacecraft2img,spacecraft3img,spacecraft4img
var spacecraft1,spacecraft2,spacecraft4,spacecraft3
var spacebgimg
var iss,spacecraft,hasDocked 
var issimg
var rovertoched

function preload(){
  spacecraft1img = loadImage("spacecraft1.png");
  spacecraft2img = loadImage("spacecraft2.png");
  spacecraft3img = loadImage("spacecraft3.png");
  spacecraft4img = loadImage("spacecraft4.png");
  spacebgimg= loadImage("spacebg.jpg");
  issimg=loadImage("iss.png");

}
function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
  rovertoched=createSprite(333, 226, 20, 20);
  rovertoched.visible=false
 //rovertoched.debug=true
 
  spacecraft=createSprite(400, 350, 50, 50);
  hasDocked =false
  spacecraft.scale=0.2
  iss.addImage("iss",issimg);
  spacecraft.addImage("spacer",spacecraft1img)
  //spacecraft.debug=true
  spacecraft.setCollider("circle",0,0,200)
}

function draw() {
  background(spacebgimg);  
  drawSprites();
  
  if(!hasDocked){
    this.x = Math.random(100,200)

  }
  if(spacecraft.isTouching(rovertoched)){
    textSize(40)
   text("docking sucessful",235,350)
   spacecraft.velocityY=0
   spacecraft.velocityX=0


  }

if(keyIsDown(UP_ARROW)){
  spacecraft.y=spacecraft.y-2
spacecraft.addImage("spacAerr",spacecraft2img);
}
if(keyIsDown(LEFT_ARROW)){
  spacecraft.x=spacecraft.x-2
spacecraft.addImage("sApacerr",spacecraft4img);
}
if(keyIsDown(RIGHT_ARROW)){
  spacecraft.x=spacecraft.x+2
spacecraft.addImage("spaScerr",spacecraft3img);
}
}



