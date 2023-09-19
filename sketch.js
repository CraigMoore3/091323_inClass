let x = 200;
let speed = 4;
let diameter = 40;
let clickState = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(125);
  ellipse(x, height/2, diameter);

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
  if (x >= width || x<=0) {
    speed = speed * -1;
  }
  x = x + speed;
}