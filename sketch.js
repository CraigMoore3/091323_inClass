function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(125);

  push();
    translate(40, 40);
    rotate(45);
    rect(40, 40, 20, 20);
  pop();

  push();
    translate(200, 80);
    rotate(60);
    rect(200, 80, 30, 20);
  pop();
}