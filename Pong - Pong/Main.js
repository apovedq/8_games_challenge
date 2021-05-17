let leftBar = new Bar(30);
let rightBar = new Bar(360);
let ball = new Ball(250,250);

function setup() {
  createCanvas(500, 400);
}

function draw() {

  background(220);
  leftBar.display();
  leftBar.mouseMovement();
  leftBar.pointsCounter(ball);

  rightBar.display();
  rightBar.pointsCounter(ball);

  ball.display();
  ball.bounce(leftBar);
  ball.bounce(rightBar);
}

function keyPressed() {
  rightBar.keysMovement();
}
