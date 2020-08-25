
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,ground;
var world,engine;

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paper(200,460,40);
	ground1 = new Ground (800,490,1600,20);
    dustbin1 = new Dustbin(1200,470);
	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background("grey");
 // Engine.update(engine);
  //drawSprites();
 paperball.display();
 ground1.display();
 dustbin1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		console.log("flag");
		console.log(paperball.body);
	    Body.applyForce(paperball.body,paperball.body.position,{x:90,y:-85});
  
	}
}

