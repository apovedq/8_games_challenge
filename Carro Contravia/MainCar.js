class MainCar {
    
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.length = 30;
    }

    display() {
        strokeWeight(2);
        stroke(9);
        rectMode(CORNER);
        fill(255,0,0);
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
         if (this.x > 600) {
            this.x = 600;
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
        

         if (this.y > 500) {
            this.y = 500;
        }

        if (this.y < 0) {
            this.y = 0;
        }
        //Movement
        if (keyCode === UP_ARROW) {
            this.y -= 2;
        } else if (keyCode === DOWN_ARROW) {
            this.y += 2;
        } 
    }
    
     getX() {
        return this.x;
    }
    
    getY() {
        return this.y;
    }
    
    getLength() {
        return this.length;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }
    
    

}