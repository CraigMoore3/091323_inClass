let ellipsePosition = 200;
let ellipseSpeed = 4;
let diameter = 40;

let rectPosition = 20;
let rectSize = 20;
let rectSpeed = 6;

let clickState = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(125);

  rect(rectPosition, height/3,rectSize);
  rectSlide();

  ellipse(ellipsePosition, height/2, diameter);

  if (mouseIsPressed) {
    let clickState = true;
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