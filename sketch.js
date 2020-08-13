
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy;

var gameState = "onSling";

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(100, 490, 40, 100);
	boy.shapeColor = "blue";

	ground = new Ground(400, 550, 900, 20);
	tree = new Tree(600, 240, 200, 50);
	mango1 = new Mango(530, 100, 30);
	mango2 = new Mango(560, 150, 30);
	mango3 = new Mango(600, 100, 30);
	mango4 = new Mango(660, 120, 30);
	mango5 = new Mango(630, 180, 30);
	stoneobject = new Stone(140, 300, 30);
	slingshot = new SlingShot(stoneobject.body,{x:200, y:50});
	
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneobject.display();
  boy.display();
  slingshot.display();

  detectollision(stoneobject, mango1);
  detectollision(stoneobject, mango2);
  detectollision(stoneobject, mango3);
  detectollision(stoneobject, mango4);
  detectollision(stoneobject, mango5);
  
  //drawSprites();
 
}

function mousepressed() {
	if(gameState !== "launched"){
		Matter.Body.setPosition(stoneobject.body, {x:mouse, y:mouseY});
	}
}

function mousereleased() {
	slingshot.fly();
	gameState = "launched"

}

function keyPressed() {
	if(keyCode === 32){
		Matter.Body.setPosition(stoneobject.body, {x:235, y:420});
		slingshot.attach(stoneobject.body);
	}
	
}

function detectollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<= lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}

}






