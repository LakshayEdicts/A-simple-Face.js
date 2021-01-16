function setup() {
  createCanvas(400, 400);
  background("blue");
}

function draw() {
  // head 
  fill("red");
  circle(200, 200, 250);
  // eyes
  fill("white")
  circle(140, 175, 25);
  circle(226, 175, 25);

  // eye ball
  fill("black")
  circle(140, 180, 10);
  circle(225, 180, 10);
}
