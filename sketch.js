var bullet,wall;
var speed,weight,thickness;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(800,400);

speed = random(223,331);
weight = random(30,52);
thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255,255,255);
  wall = createSprite(750,200,thickness,200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0);  

if(hasCollided(bullet,wall))
{

  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
if(damage>10)
{
  wall.shapeColor = color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor = color(0,255,0);
}
}
drawSprites();
}

function hasCollided(lbullet,lwall)
{
  buletRightEdge = bullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>= wallLeftEdge)
  {
    return true;
  }
  return false;
}