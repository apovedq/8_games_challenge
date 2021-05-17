class Cars {
    
    constructor(y) {
        this.x = 520;
        this.y = y;
        this.length = 30;
        this.speed = Math.floor(Math.random() * 5)+3;
    }

    display() {
        strokeWeight(2);
        stroke(9);
        rectMode(CORNER);
        fill(255,255,0);
        rect(this.x, this.y, this.length+10, this.length);
        fill(90);
        circle(this.x, this.y, 10);
        circle(this.x + 40, this.y, 10);
        circle(this.x, this.y+30, 10);
        circle(this.x + 40, this.y + 30, 10);
        fill(100);
        rect(this.x + 5, this.y + 4, 10, 20);
        rect(this.x + 30, this.y + 4, 5, 20);
        this.movement();
    }

    movement() {
        this.x -= this.speed;
        
        if (this.x < -20) {
            this.x = 620
            this.speed = Math.floor(Math.random() * 5) + 3;
        }
        
    }

    crash(ref) {
        if (dist(ref.getX(), ref.getY(), this.x, this.y) < ref.getLength()) {
            ref.setY(250);
            ref.setX(0);
        }
        
    }

    getX() {
        return this.x;
    }
    
    getY() {
        return this.y;
    }


}