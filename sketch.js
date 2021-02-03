const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,object,ball

function setup(){
createCanvas(400,400);

engine = Engine.create()
world = engine.world;
var option={
  isStatic:true
}

var ball_option = {
  restitution:1.0
}

ball = Bodies.circle(200,100,20,ball_option)
World.add(world,ball);

object = Bodies.rectangle(200,390,400,20,option);
World.add(world,object);
console.log(object);
console.log(object.position.x)

}

function draw(){
  background(0)
  Engine.update(engine)
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)

}