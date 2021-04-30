class Character {
    
    constructor(int) {
        this.user = loadImage('Assets/first.png');
        this.user1 = loadImage('Assets/second.png');
        this.user2 = loadImage('Assets/third.png');
        this.user3 = loadImage('Assets/forth.png');
        this.x = 0;
        this.y = 0;
        this.int = int;
    }
    

    display() {
        
        switch (this.int) {
            case 1:
                this.x = 100;
                this.y = 250;
                image(this.user, this.x, this.y);
                break;
            case 2:
                this.x = 200;
                this.y = 250;
                image(this.user1, this.x, this.y);
                break;
            case 3:
                this.x = 300;
                this.y = 250;
                image(this.user2, this.x, this.y);
                break;
            case 4:
                this.x = 400;
                this.y = 250;
                image(this.user3, this.x, this.y);
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

