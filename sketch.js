const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ground=new Ground(350,700,1000,50)
	ball1=new ball(500,500)
	
	stone1=new Stone(275,500,50,50)

	iron1=new Iron(250,500,70,70)

	hammer1=new Hammer(350,500,180,50)
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
 	ground.display()
	ball1.display()
	stone1.display()
	iron1.display()
	hammer1.display()

 
  drawSprites();
 

}



function mouseDragged(){
	Matter.Body.setPosition(hammer1.body, {x: mouseX , y: mouseY});
}


