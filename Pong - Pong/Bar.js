class Bar {
    
    constructor(x) {
        this.x = x;
        this.y = 200;
        this.diameter = 60;
        this.width = 10;
        this.points = 0;
    }

    display() {
        fill(0, 255, 0);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.diameter);
    
        fill(0);
        textSize(20);
        text("score: "+this.points, this.x-10, 30);
    }

    //CHECK
    keysMovement() {
        //Limiter
        if (this.y > 400) {
            this.y = 400;
        }

        if (this.y < 0) {
            this.y = 0;
        }
        //Movement
        if (keyCode === UP_ARROW) {
            this.y -= 20;
        } else if (keyCode === DOWN_ARROW) {
            this.y += 20;
        } 
    }

    //CHECK
    mouseMovement() {

        //Limiter
        if (this.y > 400) {
            this.y = 400;
        }

        if (this.y < 0) {
            this.y = 0;
        }

        //Movement
        this.y = mouseY;
    }


    pointsCounter(ref) {
        //Cada vez que toque el rectangulo los puntos aumentaran
        if (ref.getX() > this.x - 5 && ref.getX() < this.x +5 && ref.getY() > this.y-30 && ref.getY() < this.y +30) {
            this.points++;
        }
    }

    getX() {
        return this.x;
    }
    
    getY() {
        return this.y;
    }

    }


