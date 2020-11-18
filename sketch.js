const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxColor;

var fade=255;

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  
  ground = new Ground(500,495, width,10);
  
  
  //box1 = new Box(800,275,40,40,color(r,g,b));
  
  box1 = new Box(800,210,60,60,getRandomColor());
  box2 = new Box(800,270,60,60,getRandomColor());
  box3 = new Box(800,330,60,60,getRandomColor());
  box4 = new Box(800,390,60,60,getRandomColor());
  box5 = new Box(800,450,60,60,getRandomColor());

 
  
 
  polygon = new Polygon(180,200);  
  slingshot = new SlingShot(polygon.body, {x:180,y:200});

  //setting frameRate as 15 else the game is slowing down too much due to the visibility factor
  //frameRate(15);
}

function draw() {
  background("black");  
  Engine.update(engine);
  fill("white")
  text(mouseX + ' , '+mouseY, mouseX, mouseY);

  
  
  ground.display();
  
  box1.display(); 
  box2.display();
  box3.display();
  box4.display();
  box5.display();
 
  
  polygon.display();
  slingshot.display();

  fade+=-100;


}

function mouseDragged(){
  
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
  slingshot.fly();
 
}

function getRandomColor() {
  //used hexadecimal format to return colours
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body, {x: 50 , y: 200});
    slingshot.attach(polygon.body);

  }
}