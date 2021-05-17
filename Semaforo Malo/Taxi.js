class Taxi {

    constructor(x,y,diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.speed = random(3,5);
    }
    
    display() {
        rectMode(CORNER);
        fill(255,255,0);
        rect(this.x, this.y, this.diameter, this.diameter + 10);
        fill(90);
        circle(this.x, this.y, 10);
        circle(this.x + 30, this.y, 10);
         circle(this.x, this.y+40, 10);
        circle(this.x+30, this.y+40, 10);
    }

    move() {
        this.y += this.speed;
        
          if (this.y > 420) {
            this.y = -20;
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }


     catched(ref, estado ) {
        if (dist(this.x, this.y, ref.getX(), ref.getY()) < this.diameter) {
            ref.setX(-50);
            ref.setY(-50);
        }
    }

    

}