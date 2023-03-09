

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1
var block2
var block3
var plane

var block1_options
var block3_options
var block2_options

var block1_position
var block2_position
var block3_position

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
   
	block1 = Bodies.circle(200,50,20,20,block1_options);
    World.add (world,block1);

	block2 = Bodies.rectangle (400,50,20,20,block2_options);
	World.add (world,block2);

	block3 = Bodies.rectangle (600,50,20,30,block3_options);
	World.add (world,block3);

	block1_options = {
		restitution : 0.5,
		friction : 0.1,
		frictionAir : 0.5
	}

	block2_options = {
		restitution : 0.7,
		friction : 0.5,
		frictionAir : 0.3
	}

	block3_options = {
		restitution : 0.3,
		friction : 1,
		frictionAir : 0
	}

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background('black');

  Engine.update(engine)

  ellipse (block1_position.x,block1_position.y,20,20);

  rect (block2_position.x,block2_position.y,20,20);

  rect(block3_position.x,block3_position.y,20,20);
  
  drawSprites();
 
}



