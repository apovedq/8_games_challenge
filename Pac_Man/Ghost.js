class Ghost {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 20;

        this.show = function () {
            fill(255, 0, 0);
            rectMode(CENTER);
            square(this.x, this.y, this.r * 2);
        }
        this.dead = function () {
            this.y = y + 1000;
        }
    }
}