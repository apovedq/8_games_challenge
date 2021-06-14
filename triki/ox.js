function Ox(type, x, y) {
    this.x = x;
    this.y = y;
    this.type = type;

    this.show = function () {
        push();
        translate(this.x, this.y);
        if (this.type == 0) {

            rotate(PI / 4);
            fill(255, 0, 0);
            rect(-30, -4, 60, 8);
            rect(-4, -30, 8, 60);
            
        }
        else if (this.type == 1) {
            fill(0, 0, 255);
            circle(0, 0, 60);
            fill(220);
            circle(0, 0, 45);
            
        }
        pop();
    }
}




