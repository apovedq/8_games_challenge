let character;
let advanceButton = new Move(0, 255, 0, 100, 400);
let backButton = new Move(255, 0, 0, 400, 400);


function setup() {
  createCanvas(500, 500);
  character = new Character(4);
}

function draw() {
  background(220);
  character.display();
  //character.intLimiter();
  advanceButton.display();
  backButton.display();

}

function mousePressed() {

  //Advance
  if (dist(mouseX, mouseY, advanceButton.getX(), advanceButton.getY()) < advanceButton.getDiameter()) {
    character.moveAlong();
  }

  //backButton
  if (dist(mouseX, mouseY, backButton.getX(), backButton.getY()) < backButton.getDiameter()) {
    character.moveBack();
  }
}
