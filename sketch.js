const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27;
var ball, ballp;
var slingshot;
var score=0

function preload()
{
  ballp = loadImage("hexagon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2-100, height/2+150, 300, 20);
  ground2 = new Ground(width/2+300, height/2-50, 200, 20);

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  slingshot = new Sling(this.ball, {x: 100, y: 200});

  box1 = new Box(width/2-230, height/2+120, 30, 40);
  box2 = new Box(width/2-200, height/2+120, 30, 40);
  box3 = new Box(width/2-170, height/2+120, 30, 40);
  box4 = new Box(width/2-140, height/2+120, 30, 40);
  box5 = new Box(width/2-110, height/2+120, 30, 40);
  box6 = new Box(width/2-80, height/2+120, 30, 40);
  box7 = new Box(width/2-50, height/2+120, 30, 40);
  box8 = new Box(width/2-20, height/2+120, 30, 40);
  box9 = new Box(width/2+10, height/2+120, 30, 40);
  box10 = new Box(width/2-215, height/2+80, 30, 40);
  box11 = new Box(width/2-185, height/2+80, 30, 40);
  box12 = new Box(width/2-155, height/2+80, 30, 40);
  box13 = new Box(width/2-125, height/2+80, 30, 40);
  box14 = new Box(width/2-95, height/2+80, 30, 40);
  box15 = new Box(width/2-65, height/2+80, 30, 40);
  box16 = new Box(width/2-35, height/2+80, 30, 40);
  box17 = new Box(width/2-5, height/2+80, 30, 40);
  box18 = new Box(width/2-200, height/2+40, 30, 40);
  box19 = new Box(width/2-170, height/2+40, 30, 40);
  box20 = new Box(width/2-140, height/2+40, 30, 40);
  box21 = new Box(width/2-110, height/2+40, 30, 40);
  box22 = new Box(width/2-80, height/2+40, 30, 40);
  box23 = new Box(width/2-50, height/2+40, 30, 40);
  box24 = new Box(width/2-20, height/2+40, 30, 40);
  box25 = new Box(width/2-185, height/2, 30, 40);
  box26 = new Box(width/2-155, height/2, 30, 40);
  box27 = new Box(width/2-125, height/2, 30, 40);


}

function draw() {
  background(57,43,44);  
  Engine.update(engine);
  text("SCORE :"+score,750,40);
  drawSprites();
  ground1.display();
  ground2.display();
  fill(135, 205, 235);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  fill(255, 190, 200);
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  fill(65, 220, 210);
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  fill(130, 130, 130);
  box25.display();
  box26.display();
  box27.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score(); 
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();

  slingshot.display();

  imageMode(CENTER);
  image(ballp, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}