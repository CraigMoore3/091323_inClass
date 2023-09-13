let x = 200;
let speed = 4;
let diameter = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);
  ellipse(x, height/2, 40);
  if (x >= width) {
    speed = speed * -1;
  }
  if (x <= 0) {
    speed = speed * -1;
  }
  x = x + speed;
}

// function dance() {
//   let animation = frameCount;
//   rect(animation, 200, 10, 10);
//   console.log("We Dance");
//   if (frameCount > 200) {
//     let animation = frameCount *-1 ;
//     console.log("We Animate");
//   }
// }