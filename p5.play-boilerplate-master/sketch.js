var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,40,40);
  car2 = createSprite(50,100,40,40);
  car3= createSprite(50,300,40,40);
  wall = createSprite(1500,200,20,400);
  car.velocityX = 20;
  car.weight = 2260;
  car.deformation = 180;

  car2.velocityX =15 ;
  car2.weight = 1522;
  car2.deformation = 84;

  car3.velocityX = 10;
  car3.weight = 3000;
  car3.deformation = 134;
}

function draw() {
  background("black");
  if(wall.x-car.x < (car.width+wall.width)/2)  
  {
   car.velocityX=0;
   var deformation=0.5 * weight * speed * speed/22509;
    car.shapeColor=color(255,0,0);
  }
  if(wall.x-car2.x < (car2.width+wall.width)/2)  
  {
   car2.velocityX=0;
   var deformation=0.5 * weight * speed * speed/22509;
   car2.shapeColor=color("yellow");
  }
  if(wall.x-car3.x < (car3.width+wall.width)/2)  
  {
   car3.velocityX=0;
   var deformation=0.5 * weight * speed * speed/22509;
   car3.shapeColor=color("green");
  }
  

  drawSprites()
  }