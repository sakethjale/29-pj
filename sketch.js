const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon
var angryimg
var angry


function preload(){
  polygon_img=loadImage("polygon.png");
angryimg=loadImage("angry.png")
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 angry=Bodies.rectangle(100,80,30,40)
World.add(world,angry)
  polygon=Bodies.circle(50,200,20)
  World.add(world,polygon)
  slingShot=new Sli(this.polygon,{x:100,y:200})
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(890,200,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  block17 = new Block2(800,175,30,40);
  block18 = new Block2(830,175,30,40);
  block19 = new Block2(860,175,30,40);
  block20 = new Block2(890,175,30,40);
  block21 = new Block2(920,175,30,40);
  block22 = new Block2(950,175,30,40);
  block23 = new Block2(980,175,30,40);
  //level two
  block24 = new Block2(830,135,30,40);
  block25 = new Block2(860,135,30,40);
  block26 = new Block2(890,135,30,40);
  block27 = new Block2(920,135,30,40);
  block28 = new Block2(950,135,30,40);
  //level three
  block29 = new Block2(860,195,30,40);
  block30 = new Block2(890,195,30,40);
  block31 = new Block2(920,195,30,40);
  //top
  block32 = new Block2(890,155,30,40);
  
  //block33 = new Block2(100,80,30,40);

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
stand2.display();

  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();


  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
 
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  slingShot.display();
  
  fill("grey");
  block16.display();
imageMode (CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40)
//block33.display();
}
 
function mouseDragged(){
 Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
 }
 function mouseReleased(){
  slingShot.p();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon)
  }
}