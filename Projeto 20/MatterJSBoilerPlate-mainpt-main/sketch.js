

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var block1
var block2
var block3
var plane
var engine
var world




function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options = {
		isStatic : true,
	
	}

	var block1_options = {
		restitution : 0.5,
		friction : 0.1,
		frictionAir : 0.5
	}

	var block2_options = {
		restitution : 0.7,
		friction : 0.5,
		frictionAir : 0.3
	}

	var block3_options = {
		restitution : 0.3,
		friction : 1,
		frictionAir : 0
	}
   
	plane = Bodies.rectangle (400,590,800,20, plane_options);
	World.add (world,plane)

	block1 = Bodies.circle(200,50,20,20,block1_options);
    World.add (world,block1);

	block2 = Bodies.rectangle (400,50,20,20,block2_options);
	World.add (world,block2);

	block3 = Bodies.rectangle (600,50,20,30,block3_options);
	World.add (world,block3);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background('black');

  Engine.update(engine)

  ellipse (block1.position.x,block1.position.y,20,20);

  rect (block2.position.x,block2.position.y,20,20);

  rect(block3.position.x,block3.position.y,20,20);

  rect (plane.position.x, plane.position.y, 20,20)
  
  drawSprites();
 
}



