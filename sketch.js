const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy, boyimg;

//var gameState = "onSling";

function preload()
{
	boyimg = loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
		
	image(boyimg, 300, 400, 80, 400);
	//boyimg.setStatic = true;

	ground = new Ground(400, 550, 900, 20);
	tree = new Tree(600, 250, 300, 600);
	mango1 = new Mango(530, 100, 30);
	mango2 = new Mango(560, 150, 30);
	mango3 = new Mango(600, 100, 30);
	mango4 = new Mango(660, 120, 30);
	mango5 = new Mango(630, 180, 30);
	stoneobject = new Stone(140, 300, 30);
	slingshot = new SlingShot(stoneobject.body,{x:150, y:460});
	
	

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
  slingshot.display();

  detectollision(stoneobject, mango1);
  detectollision(stoneobject, mango2);
  detectollision(stoneobject, mango3);
  detectollision(stoneobject, mango4);
  detectollision(stoneobject, mango5);
  
  //drawSprites();
 
}

function mouseDragged() {
	//if(gameState !== "launched"){
		Matter.Body.setPosition(stoneobject.body, {x:mouseX, y:mouseY});
	//}
}

function mouseReleased() {
	slingshot.fly();
	//gameState = "launched"

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






