const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;
const Body = Matter.Body;
var myEngine, myWorld;
var block1;

function preload() {
    char = loadImage("sprites/girl.png");
}

function setup() {
    createCanvas(1500, 700);
    myEngine = engine.create();
    myWorld = myEngine.world;
    block1 = new Block(150,150);
    block2 = new Block(250,300);
    block3 = new Block(464,539);
    girl = bodies.circle(125,644,100);
    world.add(myWorld,girl);
    ground = bodies.rectangle(750,680,1500,5,{isStatic:true});
    world.add(myWorld,ground);
    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw(){
    background("green");
    engine.update(myEngine);
    Matter.Body.setVelocity(block1.body,{x:random(3,-3),y:0});
    Matter.Body.setVelocity(block2.body,{x:random(5,-5),y:0});
    Matter.Body.setVelocity(block3.body,{x:random(2,-3),y:random(-1,0)});
    block1.display();
    block2.display();
    block3.display();
    rect(ground.position.x, ground.position.y, 1500,5);
    fill("black");
    text('x:'+mouseX+',y:'+mouseY,mouseX,mouseY);
    image(char, girl.position.x, girl.position.y, 100,100);
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setVelocity(girl,{x:0,y:-10});
    }

    if(keyCode === 39){
        Matter.Body.setVelocity(girl,{x:10,y:0});
    }

    if(keyCode === 37 ){
        Matter.Body.setVelocity(girl,{x:-10,y:0});
    }
}