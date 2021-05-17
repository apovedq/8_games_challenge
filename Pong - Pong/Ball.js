class Ball {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.randomY;
        this.randomX;
        this.xDir = -1;
        this.yDir = Math.floor(Math.random() * 2 + -2);
        
    }

    display() {
        fill(255,0,0);
        circle(this.x, this.y, this.radius);
        this.x += this.xDir;
        this.y += this.yDir;
    }

    bounce(ref) {

        if (this.y > 400) {
            
            this.yDir -= 2;
        }

        if (this.y < 20) {
            this.yDir += 2;
        }

        this.randomY = Math.floor(Math.random() * 10 + -10);

        if (this.x > ref.getX() - 5 && this.x < ref.getX() + 5 && this.y > ref.getY() - 30 && this.y < ref.getY() + 30) {
            this.xDir = this.xDir * -1;
            this.yDir =  Math.floor(Math.random() * 2 + -2);
        }
    }


    getX() {
        return this.x;
    }

    getY() {
        return this.y;s
    }

    getRadius() {
        return this.radius;
     }
}