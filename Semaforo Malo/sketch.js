let taxis = [];
let car = new Car(20,200,30);

function setup() {
  createCanvas(500, 400);
  let x = 100;


  for (let i = 0; i < 4; i++) {
    taxis.push(new Taxi(x, 100, 30));
    x += 100;
  }
}

function draw() {
  background(220);
  let x = 75;
   let perdedor = false;

  //Carreteras
  for (let i = 0; i < 4; i++) {
    fill(30);
    rect(x,0,100,400);
    x += 100;
  }

  //Vias 
  fill(90);
  rect(60,180,420,60);

  for (let i = 0; i < 4; i++) {
    taxis[i].display();
    taxis[i].move();
    taxis[i].catched(car);
  }

  car.display();
  car.movement();

  if(car.getX===-50 )
  console.log(perdedor);

}


