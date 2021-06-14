class Pac {
    constructor() {
        this.x = 200;
        this.y = height - 20;
        this.r = 30;
        this.trap = false;

        this.show = function () {
            fill(255, 255, 0);
            circle(this.x, this.y, this.r * 2);
        }

        this.eats = function (Ghost) {
            if (dist(this.x, this.y, Ghost.x, Ghost.y) < this.r + Ghost.r) {
                return true;
            } else {
                return false;
            }
        }
        this.gone = function () {
            this.trap = true;
        }
        this.move = function () {
            if (keyIsDown(65)) {
                this.x -= 5;
            }

            if (keyIsDown(68)) {
                this.x += 5;
            }

            if (keyIsDown(87)) {
                this.y -= 5;
            }

            if (keyIsDown(83)) {
                this.y += 5;
            }
        }
    }
}