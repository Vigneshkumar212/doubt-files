var snake;
var siZE = 5;
var food;
var w;
var h;
var score = 0 ;
function setup() {
  createCanvas(400, 400);
  w = floor(width / siZE);
  h = floor(height / siZE);
  frameRate(5);
  snake = new Snake();
  
  Food_x_y();
}

function Food_x_y() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    snake.Velocity(-1, 0);
  } else if (keyIsDown(RIGHT_ARROW)) {
    snake.Velocity(1, 0);
  } else if (keyIsDown(DOWN_ARROW)) {
    snake.Velocity(0, 1);
  } else if (keyIsDown(UP_ARROW)) {
    snake.Velocity(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {

  

  scale(siZE);
  
  background(0);
  if (snake.eat(food)) {
    score = score +1;
    Food_x_y();
  }
  snake.Adding_box();
  snake.Display();

  if (frameRate === 1){
    snake.body.position.x = food.body.position.x
    snake.body.position.y = food.body.position.y
  }


  noStroke();
  fill(255, 0, 0);

  if (snake.GameState()) {
    fill(0,0,255);
    background(0, 0, 255);
    noLoop();
  }
  console.log(score);
  text(score,350,20);
  rect(food.x, food.y, 1, 1);
}