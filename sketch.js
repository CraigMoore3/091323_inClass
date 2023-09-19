let ellipsePosition = 200;
let ellipseSpeed = 4;
let ellipseColor = (0,0,0);
let diameter = 40;

let rectPosition = 20;
let rectSize = 20;
let rectColor = (255, 255, 255);
let rectSpeed = 6;


let clickState = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let rColor = random(255);
  background(125);
  
  fill(rectColor);
  rect(rectPosition, height/3,rectSize);
  rectSlide();

  fill(ellipseColor);
  ellipse(ellipsePosition, height/2, diameter);

  if (mouseIsPressed) {
    let clickState = true;
    ellipseColor = (rColor);
    console.log("Mouse is clicked", clickState);
    pingPong();
  }
  else {
    let clickState = false;
    console.log("Mouse is no longer clicked", clickState);
  }
}

function pingPong() {
  if (ellipsePosition >= width || ellipsePosition<=0) {
    ellipseSpeed *= -1;
  }
  ellipsePosition += ellipseSpeed;
}

function rectSlide () {
  if (rectPosition >= width || rectPosition <= 0) {
    rectSpeed *= -1;
  }
  rectPosition += rectSpeed;
}