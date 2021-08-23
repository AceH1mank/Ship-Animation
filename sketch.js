var bgShip;
var shipAnimation;
var ship
var bg

function preload(){
bgShip=loadImage("sea.png");
shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  bg = createSprite();
  bg.addImage(bgShip);
  ship=createSprite(120,200,20,20);
  ship.addAnimation("ship",shipAnimation);
  ship.scale = 0.2;
 // ship.x = 50;
}

function draw() {
  background("blue");

//if()

 drawSprites();
}