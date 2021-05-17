class Car {
    
    constructor(x,y,diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
      
    }
    
    display() {
        rectMode(CORNER);
        fill(255,0,0);
        rect(this.x, this.y, this.diameter+10, this.diameter);
        fill(0);
        circle(this.x, this.y, 10);
        circle(this.x + 40, this.y, 10);
        circle(this.x, this.y+30, 10);
        circle(this.x+40, this.y+30, 10);
    }
    
    movement() {
        if (this.x > 400) {
            this.x = 400;
        }

        if (this.x < 0) {
            this.x = 0;
        }
        //Movement
        if (keyCode === LEFT_ARROW) {
            this.x -= 2;
        } else if (keyCode === RIGHT_ARROW) {
            this.x += 2;
        } 
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
     setX(x) {
        this.x = x;
    }
    
    setY(y) {
        this.y = y;
    }


}