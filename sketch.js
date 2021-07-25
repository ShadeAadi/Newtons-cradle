const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	stand = new Rack(400, 100, 500, 50);
	ball1 = new Bob(240, 400, 40);
	string1 = new String(ball1.body, {x:-160, y:25})
	ball2 = new Bob(320, 400, 40);
	string2 = new String(ball2.body, {x:-80, y:25})
	ball3 = new Bob(400, 400, 40);
	string3 = new String(ball3.body, {x:0, y:25})
	ball4 = new Bob(480, 400, 40);
	string4 = new String(ball4.body, {x:80, y:25})
	ball5 = new Bob(560, 400, 40);
	string5 = new String(ball5.body, {x:160, y:25})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  stand.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
}
function mouseDragged (){
	if (keyCode === 49) {
		Matter.Body.setPosition (ball1.body, {x: mouseX, y: mouseY})
	}
	if (keyCode === 50) {
		Matter.Body.setPosition (ball2.body, {x: mouseX, y: mouseY})
	}
	if (keyCode === 51) {
		Matter.Body.setPosition (ball3.body, {x: mouseX, y: mouseY})
	}
	if (keyCode === 52) {
		Matter.Body.setPosition (ball4.body, {x: mouseX, y: mouseY})
	}
	if (keyCode === 53) {
		Matter.Body.setPosition (ball5.body, {x: mouseX, y: mouseY})
	}
}



