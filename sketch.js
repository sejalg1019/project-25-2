// name spacing
const Engine=Matter.Engine; //universe
const World=Matter.World; //planet
const Bodies=Matter.Bodies; //objects

var engine1,world1,ground;
var paper, dustbin;

function setup() {
  createCanvas(1600,700);
  engine1 = Engine.create(); //creating engine1
  world1 = engine1.world; //creating world1 inside engine 1
  ground = new Ground(800,670,1600,20);
  dustbin = new Dustbin(1200,570);
  paper = new Paper(200,450);
}

function draw() {
  background(255,255,255);
  Engine.update(engine1); //starting the engine
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
  }
}