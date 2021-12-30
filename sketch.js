const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight =300;
var plinkos = [];
var particles = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground_base= new Ground(100,790,800,10,"brown")
  ground_1= new Ground(10,80,10,1400,"brown")
  ground_2= new Ground(470,80,10,1400,"brown")
  white_ground= new Ground(120,780,720,10, "white")
//  plinko = new Plinko(170,170,10)

for (var k=0; k<= width; k =k+80) {
  divisions.push(new Division(k,height-divisionHeight/2,10, divisionHeight));
}

for (var j=40; j<=width; j = j+ 50) {
 // console.log("adding " + j);
  plinkos.push(new Plinko(j,75,10));
}

for (var j=15; j<=width-10; j=j+50) {
//  console.log("another " + j);
  plinkos.push(new Plinko(j,175,10));
}

//console.log("total lenght " + plinkos.length);
}

function draw() {
  background(225,255,255);  
  ground_base.display();
  ground_1.display();
  ground_2.display();
  white_ground.display();
//  plinko.display();

 for (var k=0; k < divisions.length; k++) {
    divisions[k].display();
 }

 for (var j=0; j < plinkos.length; j++) {
   plinkos[j].display();
 }
  drawSprites();
}