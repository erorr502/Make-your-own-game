const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    platform = new Platform(600,height,1200,20);
    ground= new Ground(600, 305, 300, 170);
    //pool= new Pool(600, 100, 300, 170);
    board= new Board(600, 100, 300, 170);
    pikachu = new Pikachu(810, 350);
    ball = new Ball(200,305);
    slingshot = new SlingShot(ball.body,{x:200, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    pikachu.display();
    ball.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(ball.body);
    }
}