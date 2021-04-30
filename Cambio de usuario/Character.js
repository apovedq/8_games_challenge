class Character {
    
    constructor(int) {
       
        this.x = 0;
        this.y = 0;
        this.int = int;
    }
    

    display() {
        
        switch (this.int) {
            case 1:
                this.x = 100;
                this.y = 250;
                fill(0,255,40);
                circle(this.x, this.y, 100);
                break;
            case 2:
                this.x = 200;
                this.y = 250;
                fill(255,0,0);
                circle(this.x, this.y, 100);
                break;
            case 3:
                this.x = 300;
                this.y = 250;
                fill(255,255,0);
                circle(this.x, this.y, 100);
                break;
            case 4:
                this.x = 400;
                this.y = 250;
                fill(255,0,255);
                circle(this.x, this.y, 100);
                break;
        }
    }

    moveAlong() {
            this.int++;
    }
    
    moveBack() {
            this.int--;
        }
    }

