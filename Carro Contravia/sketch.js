let allCars = [];
let cars = new Cars(50);
let object = new MainCar(100,100);

function setup() {
  createCanvas(600, 500);

    let y = 30;
  for (let i = 0; i < 6; i++) {
    allCars.push(new Cars(y));
    y += 80;
  }

}

function draw() {
  background(200);

  lines(5);
  object.display();

  for (let i = 0; i < 6; i++) {
    allCars[i].display();
    allCars[i].crash(object);
  }
  


  
  
}





function lines(y) {
  for (let i = 0; i < 5; i++) {
    fill(100);
    stroke(255);
    strokeWeight(7);
    rect(00, y, 600, 90);
    y += 100;
  }
 }
