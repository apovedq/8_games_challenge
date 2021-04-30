class Move {
    
    constructor(r, g, b, x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    intLimiter() {
        if (this.int > 4) {
            this.int = 4;
        }

        if (this.int < 0) {
            this.int = 0;
        }  
    }

    display() {
        fill(this.r,this.g,this.b);
        square(this.x, this.y, this.diameter);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getDiameter() {
        return this.diameter;
    }

}