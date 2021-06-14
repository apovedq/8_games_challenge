let posX = 280;
let distX = 6;
let distY = 6;
const bricks = [];
let lives = 3;
let rightPress = false;
let leftPress = false;
let game = true;
let livesRestart = false;
let brickColors = [255, 220, 180, 140];
let score = 0

function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(220);
  if (game && !livesRestart) ball()
  if (livesRestart && game) lostLifeText()
  if (!game && livesRestart) restartGame()
  if (game) {
    scoreText()
    livesText()
    drawBricks()
    paddle()
  }
}
function paddle() {
 
  rect(moveMent, 385, 100, 15, 20)
  if (rightPress && moveMent < 500) {
    moveMent += 10
  }
  if (leftPress && moveMent > 0) {
    moveMent += -10
  }
}
function drawBricks() {
  bricks.forEach(brick => {
    fill(brick.color)
    rect(brick.x, brick.y, brick.w, brick.h)
  })
}
function platform() {
  fill(0, 0, 255);
  rect(posX, 385, 100, 15, 20);
}

const circle = {
  x: posX + 50, y: 380, r: 20
}

function ball() {
  ellipse(circle.x, circle.y, circle.r, circle.r)
  if (circle.y <= 0) {
    distY = -distY;
    score++;
  }
  if (circle.y >= height - 15 && circle.x > posX && circle.x <= posX + 50) {
    distY = -distY;
    if (distX > 0) distX = -distX;
    if (distX < 0) distX = distX;
  }
  if (circle.y >= height - 15 && circle.x > posX + 50 && circle.x <= posX + 100) {
    distY = -distY;
    if (distX > 0) distX = -distX;
    if (distX < 0) distX = distX;
  }
  if (circle.x >= width - 10 || circle.x <= 0) { distX = -distX; }

  bricks.forEach((item, index) => {
    if (checkCrash(circle, item)) {
      distY = -distY;
      score++;
      bricks.splice(index, 1);
    }
  })

  if (circle.y > height) {
    lives--
    livesRestart = true;
    if (lives === 0) game = false;
  }
  circle.x += distX;
  circle.y += distY;
}

function createBricks() {
  const rows = 8;
  const cols = 10;

  for (let i = 0; i < cols; i++) {
    for (let j = o; j < rows; j++) {
      let brick = { x: i * 58 + 10, y: j * 12 + 30, w: 57, h: 10, color: brickColors[j] }
      bricks.push(brick);
    }
  }
}
function drawbricks() {
  bricks.forEach(brick => {
    fill(brick.color)
    rect(brick.x, brick.y, brick.w, brick.h)
  })
}
function keyPressed(value) {
  if (value.key === 'ArrowRight') {
    rightPress = true
  }
  if (value.key === 'ArrowLeft') {
    leftPress = true
  }
  if (value.keyCode === 32 && livesRestart) {
    livesRestart = false
    circle.x = moveMent + 50
    circle.y = 380
  }
  if (value.keyCode === 32 && !game) {
    game = true
    circle.x = moveMent + 50
    circle.y = 380
    score = 0
    lives = 3
    dy = -6
    moveMent = 250
    createBricks()
  }
}
function restartGame() {
  fill('#FFEEEE')
  textAlign(CENTER);
  noStroke()
  textStyle(BOLD);
  textFont('Arial');
  textSize(38)
  text('GAME OVER', 300, 170)
  textFont('Arial');
  textSize(28);
  text('Final score: ' + score, 300, 200);
  textSize(18);
  text('Press SpaceBar to restart game', 300, 225);
}
function lostLifeText() {
  fill('#FFEEEE')
  textAlign(CENTER);
  noStroke()
  textStyle(BOLD);
  textFont('Arial');
  textSize(36)
  text('Life Lost', 300, 170)
  textFont('Arial');
  textSize(24);
  text('You now have ' + lives + ' lives remaining', 300, 200);
  textSize(18);
  text('Press SpaceBar to restart', 300, 225);
}
function scoreText() {
  fill('#FFEEEE')
  textStyle(BOLD);
  textAlign(CENTER);
  noStroke()
  textFont('Arial');
  textSize(18);
  text('Score: ' + score, 555, 20);
}
function livesText() {
  textStyle(BOLD);
  textAlign(CENTER);
  noStroke()
  textFont('Arial');
  textSize(18);
  text('Lives: ' + lives, 40, 20);
}
function checkCrash(ball, brick) {
  if (ball.y - 20 < brick.y && ball.x > brick.x && ball.x <= brick.x + 58) {
    return true
  }
}