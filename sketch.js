var movingRect,fixedRect
var car,wall
var ball,ball1

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect=createSprite(600,400,50,80);
  car=createSprite(300,300,30,10);
  car.velocityX=3;
  wall=createSprite(1000,300,100,200);
  ball=createSprite(100,100,10,10);
  ball.velocityX=2;
  ball1=createSprite(200,100,10,10);
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
bounceOff(ball,ball1);
 if(isTouching(car,wall)===true){
car.shapeColor="blue"
wall.shapeColor="blue"



 }
else{
car.shapeColor="red"
wall.shapeColor="red"




}


 
  drawSprites();
}












