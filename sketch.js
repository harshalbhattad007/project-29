
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(900, 600);

	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    
ground = new Ground(1000,580,2000,20);
ground1 = new Ground(390,300,250,10);
ground2 = new Ground(700,200,200,10);
    
stoneObj = new Stone(50,200,20);

box1 = new Box(300,275,30,40);
box2 = new Box(320,275,30,40);
box3 = new Box(310,280,30,40);
box4 = new Box(345,290,30,40);
box5 = new Box(340,275,30,40);
box6 = new Box(400,255,30,40);
box7 = new Box(410,255,30,40);
box8 = new Box(420,255,30,40);
box9 = new Box(430,255,30,40);
box10 = new Box(440,255,30,40);

box11 = new Box(610,255,50,80);
box12 = new Box(630,255,30,40);
box13 = new Box(650,255,30,40);
box14 = new Box(670,255,30,40);
box15 = new Box(690,255,30,40);
box16 = new Box(710,255,30,40);
box17 = new Box(730,255,30,40);
box18 = new Box(750,255,30,40);
box19 = new Box(770,255,30,40);
box20 = new Box(800,255,30,40);
connect = new Slingshot(stoneObj.body,{x:100,y:390})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(56,44,44);

  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  drawSprites(); 

  stoneObj.display()
  connect.display();


  ground.display();
  ground1.display();
  ground2.display();


 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    connect.fly();
}





