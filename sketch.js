const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var particles=[];
var plinko=[];
var divisions=[];
var divisionHeight;

function setup() {
  createCanvas(800,400);




  for (var k=0; k<=width; k=k+80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight));
  }
class----- Division.js (rectangle)
plinko.js (circle)
particles.js (circle)


}

function draw() {
  background(255,255,255);  
 
}