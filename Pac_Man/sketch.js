var pacman;
var ghosts = [];

function setup() {
  createCanvas(400, 400);
  pacman = new Pac();
  for (var i = 0; i < 4; i++) {
    ghosts[i] = new Ghost(i * 100 + 60, i * 100 + 60);
  }
}
function draw() {
  background(220);
  pacman.show();
  pacman.move();
  pacman.eats();
  for (var i = 0; i < ghosts.length; i++) {
    ghosts[i].show();
  }
  for (var i = 0; i < ghosts.length; i++) {
    if (pacman.eats(ghosts[i])) {
      console.log("EAT");

    }
  }
}
