const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var ground1;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  ground1=new Ground(400,100,200,10)

  bob1 = new Bob(400,200,50,50);
  chain1=new chain(bob1.body,ground1);

  bob2 = new Bob(450,200,50,50);
  chain2=new chain(bob1.body,ground1);
  
  bob3 = new Bob(350,200,50,50);
  chain3=new chain(bob1.body,ground1);
  
  bob4 = new Bob(500,200,50,50);
  chain4=new chain(bob1.body,ground1);
  
  bob5 = new Bob(300,200,50,50);
  chain4=new chain(bob1.body,ground1);
}

function draw() {
  background(255,100,100); 

  bob1.display();
  chain1.display();
  
  ground1.display();
  drawSprites(); 
}