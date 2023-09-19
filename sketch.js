let ellipsePosition = 200; 
    ellipseSpeed = 4; 
    ellipseColor = (0,0,0); 
    diameter = 40;

let rectPosition = 20;
    rectSize = 20;
    rectColor = (255, 255, 255);
    rectSpeed = 6;

let clickState = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);
  
  fill(rectColor);
  rect(rectPosition, height/3,rectSize);
  rectSlide();

  fill(ellipseColor);
  ellipse(ellipsePosition, height/2, diameter);

  checkForInput();
  
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

function checkForInput() {
  
  let rColor = random(255);

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