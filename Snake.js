var l =0;
class Snake {
  
  constructor() {

    this.image = loadImage("sprites/snake.png");
    this.imagel = loadImage("sprites/snake_left.png");
    this.imager = loadImage("sprites/snake1.png");
    this.imaged = loadImage("sprites/snake_down.png");
    this.imageu = loadImage("sprites/snake_up.png");

    this.iright = loadImage("sprites/sr.png");
    this.ileft = loadImage("sprites/sl.png");
    this.iup = loadImage("sprites/su.png");
    this.idown = loadImage("sprites/sd.png");

  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xVelocity = 0;
    this.yVelosity = 0;
    this.len = 0;

    

  }
  
  Velocity(x, y) {
  	this.xVelocity = x;
    this.yVelosity = y;
  }
  
  Adding_box() {
  	var head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xVelocity;
    head.y += this.yVelosity;
    this.body.push(head);
  }
  
  grow() {
  	var head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }
  
  GameState() {
  	var x = this.body[this.body.length-1].x;
    var y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    for(var i = 0; i < this.body.length-1; i++) {
    	var part = this.body[i];
      if(part.x === x && part.y === y) {
      	return true;
      }
    }
    return false;
  }
  
  eat(pos) {
  	var x = this.body[this.body.length-1].x;
    var y = this.body[this.body.length-1].y;
    if(x === pos.x && y === pos.y) {
      this.grow();
      l = l + 1
      return true;
    }
    return false;
  }
  
  Display() {


  	for(var i = 0; i < this.body.length; i++) {
    	fill(0);
      noStroke();
      
      image(this.image,this.body[i].x, this.body[i].y,1,1);

      if (keyCode === LEFT_ARROW) {
        image(this.imagel,this.body[l].x, this.body[l].y,1,1);
      } else if (keyCode === RIGHT_ARROW) {
        image(this.imager,this.body[l].x, this.body[l].y,1,1);
      } else if (keyCode === DOWN_ARROW) {
        image(this.imaged,this.body[l].x, this.body[l].y,1,1);
      } else if (keyCode === UP_ARROW) {
        image(this.imageu,this.body[l].x, this.body[l].y,1,1);
      }
      
      if (keyCode === LEFT_ARROW ) {

        image(this.iright,this.body[0].x, this.body[0].y,1,1);

      } else if (keyCode === RIGHT_ARROW ) {

         image(this.ileft,this.body[0].x, this.body[0].y,1,1);

      } else if (keyCode === DOWN_ARROW ) { 
        
        image(this.iup,this.body[0].x, this.body[0].y,1,1);

      } else if (keyCode === UP_ARROW ) { 
        
        image(this.idown,this.body[0].x, this.body[0].y,1,1);

      }
    }

      
    }


}