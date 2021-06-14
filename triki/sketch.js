posArray = {
  "00": [[65, 155], [65, 155]],
  "10": [[65, 155], [155, 255]],
  "20": [[65, 155], [265, 355]],

  "01": [[165, 255], [65, 155]],
  "11": [[165, 255], [155, 255]],
  "21": [[165, 255], [265, 355]],

  "02": [[265, 355], [65, 155]],
  "12": [[265, 355], [155, 255]],
  "22": [[265, 355], [265, 355]],
}

onBoard = [];
let won;

board = [
  [/* [0][0] [0][1] [0][2] */],
  [/* [1][0] [1][1] [1][2] */],
  [/* [2][0] [2][1] [2][2] */]
];

function setup() {
  createCanvas(420, 420);
}

function draw() {
  background(220);
  fill(0);
  noStroke();
  showGrid();

  if(won == 'o'){
    posArray = {};
    textSize(30);
    text("Ganó 'o'", 160, 370, 120, 60);
  }else if (won == 'x'){
    posArray = {};
    textSize(30);
    text("Ganó 'x'", 160, 370, 120, 60);
  }

  for (let i = 0; i < onBoard.length; i++) {
    onBoard[i].show();
  }

}

function showGrid() {
  rect(155, 65, 10, 290, 20);
  rect(255, 65, 10, 290, 20);
  rect(65, 155, 290, 10, 20);
  rect(65, 255, 290, 10, 20);
}

function mousePressed() {
  for (let coords in posArray) {
    let x1 = posArray[coords][0][0];
    let x2 = posArray[coords][0][1];
    let y1 = posArray[coords][1][0];
    let y2 = posArray[coords][1][1];

    if (x1 <= mouseX && mouseX <= x2 && y1 <= mouseY && mouseY <= y2) {
      let midX = (x1 + x2) / 2;
      let midY = (y1 + y2) / 2;

      let type = onBoard.length % 2;

      onBoard.push(new Ox(type, midX, midY));

      board[coords[0]][coords[1]] = type;

      delete posArray[coords[0] + coords[1]];

      if (onBoard.length >= 5) {
        checkWin();
      }
    }
  }
  function checkWin() {
    let sum;

    for (let i = 0; i < 3; i++) {
      let sum = board[i][0] + board[i][1] + board[i][2];
      if (sum == 0) {
        won = "x"
      } else if (sum == 3) {
        won = "o"
      }
    }
    for (let i = 0; i < 3; i++) {
      let sum = board[0][i] + board[1][i] + board[2][i];
      if (sum == 0) {
        won = "x"
      } else if (sum == 3) {
        won = "o"
      }

    }

    sum = board[0][0] + board[1][1] + board[2][2];

    if (sum == 0) {
      won = "x"
    } else if (sum == 3) {
      won = "o"
    }
    sum = board[0][2] + board[1][1] + board[2][0];

    if (sum == 0) {
      won = "x"
    } else if (sum == 3) {
      won = "o"
    }
  }
}

