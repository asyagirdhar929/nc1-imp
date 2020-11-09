const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

var ropeLength;
var ropeStiffness;

function setup(){
    createCanvas(800,450);
    engine = Engine.create();
    world = engine.world;



    ropeLength = 300;
    ropeStiffness = 0;

    bob1 = new Bob(260, 200, 35);
    rope1 = new Rope(bob1.body, {x: 260, y: 80}, ropeLength, ropeStiffness);

    bob2 = new Bob(330, 200, 35);
    rope2 = new Rope(bob2.body, {x: 330, y: 80}, ropeLength, ropeStiffness);

    bob3 = new Bob(400, 200, 35);
    rope3 = new Rope(bob3.body, {x: 400, y: 80}, ropeLength, ropeStiffness);

    bob4 = new Bob(470, 200, 35);
    rope4 = new Rope(bob4.body, {x: 470, y: 80}, ropeLength, ropeStiffness);

    bob5 = new Bob(590, 100, 35);
    rope5 = new Rope(bob5.body, {x: 540, y: 80}, ropeLength, ropeStiffness);
}

function draw(){
    background("black");
    Engine.update(engine);

    rope1.display();
    bob1.display();

    rope2.display();
    bob2.display();

    rope3.display();
    bob3.display();

    rope4.display();
    bob4.display();

    rope5.display();
    bob5.display();

    rectMode(CENTER);
    fill(0, 0, 0);
    stroke("red");
    rect(400, 80, 375, 50);
}

