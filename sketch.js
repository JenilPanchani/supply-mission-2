var helicopterIMG, helicopterSprite, packageSprite, packageIMG, redboxHorizontalSprite, redboxLeftSprite, redboxRightSprite;
var packageBody, groundBody, redboxBody, redboxLeftBody, redboxRightBody;
var backgroundImage, backgroundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var redBox;

 
function preload() {
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	backgroundIMG=loadImage("background.png");
}

function setup() {
	createCanvas(700, 630);
	//rectMode(CENTER);
	backgroundSprite = createSprite(0,-20,width,height);
	backgroundSprite.addImage(backgroundIMG);
	backgroundSprite.scale= 2 ;

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite = createSprite(width/2, height-10, width,10);
	groundSprite.shapeColor = "yellow";

	redboxHorizontalSprite = createSprite(width/2,height-20,100,10);
	redboxHorizontalSprite.shapeColor = "red";

	redboxLeftSprite = createSprite(width/2-redboxHorizontalSprite.width/2,height-45,10,50);
	redboxLeftSprite.shapeColor = "red";

	redboxRightSprite = createSprite(width/2+redboxHorizontalSprite.width/2,height-45,10,50);
	redboxRightSprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200,23,{restitution:0.3,isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	groundBody = Bodies.rectangle(width/2,height-10,width,10,{isStatic:true} );
	World.add(world, groundBody);

	redboxBody = Bodies.rectangle(width/2,height-20,200,10,{isStatic:true});
	World.add(world, redboxBody);

	redboxLeftBody = Bodies.rectangle(width/2-redboxHorizontalSprite.width/2,height-45,10,50,{isStatic:true});
	World.add(world, redboxLeftBody);

	redboxRightBody = Bodies.rectangle(width/2+redboxHorizontalSprite.width/2,height-45,10,50,{isStatic:true});
	World.add(world, redboxRightBody);

	Engine.run(engine);
}


function draw() {
	//rectMode(CENTER);
	background(255);
	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;

	if(redboxHorizontalSprite.x + redboxHorizontalSprite.width/2 <= 0) {
		redboxHorizontalSprite.x = width + redboxHorizontalSprite.width/2; 
	} 
	drawSprites();     
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
  	}
}