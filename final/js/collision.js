var spaceship;
var enemies = [];
var bullets = [];

function setup () {
    createCanvas(1000,600);
    background("black");
    frameRate(60);
    noCursor();
    
    spaceship = new Spaceship();
    for(var i = 0; i < 10; i++) {
        enemies.push(new enemy());
    }
    
}

function draw () {
    background("black");
    crosshair();
    spaceship.display();
    spaceship.edges();
    
//    if (keyIsPressed) {
//        spaceship.update(keyCode);
//    }
    
    //movement of spaceship
    if (keyIsDown(RIGHT_ARROW)) {
       spaceship.x += spaceship.xSpeed;   
   } 
    if (keyIsDown(LEFT_ARROW)) {
       spaceship.x -= spaceship.xSpeed;
   } 
    if (keyIsDown(DOWN_ARROW)) {
       spaceship.y += spaceship.ySpeed;
   } 
    if (keyIsDown(UP_ARROW)) {
       spaceship.y -= spaceship.ySpeed;
   }
    
    //bullets
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].display();
        bullets[i].update();
    }
    
    //enemies
    var extra = frameCount/600;
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].display();
        enemies[i].update();
        enemies[i].edges();  
    }
    
    
    
}

function Spaceship () {
    this.size = 50;
    this.x = width/2;
    this.y = height/2;
    this.xSpeed = 10;
    this.ySpeed = 10;
    
    this.display = function() {
        fill('white');
        noStroke();
        
        var dx = mouseX - this.x;
        var dy = mouseY - this.y;
        var angle = atan2(dy, dx);
        push();
        translate(this.x, this.y);
        rotate(angle + HALF_PI);
        
        quad(0, 0-this.size/2, this.size-this.size/2, this.size-this.size/2, 0, this.size/4*3-this.size/2, 0-this.size/2, this.size-this.size/2);
        pop();
    }
    
    this.edges = function () {
        if (this.x > width){
            this.x = 0;
        } else if (this.x < 0){
            this.x = width;
        }
        if (this.y > height){
            this.y = 0;
        } else if (this.y < 0){
            this.y = height;
        }
    }
    
    
}
function keyIsDown() {
   if (keyCode == RIGHT_ARROW) {
       spaceship.x += spaceship.xSpeed;   
   } 
    if (keyCode == LEFT_ARROW) {
       spaceship.x -= spaceship.xSpeed;
   } 
    if (keyCode == DOWN_ARROW) {
       spaceship.y += spaceship.ySpeed;
   } 
    if (keyCode == UP_ARROW) {
       spaceship.y -= spaceship.ySpeed;
   }
}
    
    
//    this.update = function(k) {
//        if (k == RIGHT_ARROW) {
//            this.x += this.xSpeed;   
//        }
//        if (k == LEFT_ARROW) {
//            this.x -= this.xSpeed;
//        } 
//        if (k == DOWN_ARROW) {
//            this.y += this.ySpeed;
//        } 
//        if (k == UP_ARROW) {
//            this.y -= this.ySpeed;
//        }
//    }


function crosshair () {
    fill('white');
    stroke('white');
    strokeWeight(3);
    line(mouseX,mouseY+4,mouseX,mouseY+10);
    line(mouseX,mouseY-4,mouseX,mouseY-10);
    line(mouseX+4,mouseY,mouseX+10,mouseY);
    line(mouseX-4,mouseY,mouseX-10,mouseY);
}

function blaster (x,y) {
    this.pos = createVector(x,y);
    this.vel = (this.xspeed, this.yspeed);
    this.speed = 10;
    this.xspeed = sqrt(sq(this.speed)-sq(y-mouseY));
    this.yspeed = sqrt(sq(this.speed)-sq(mouseX-x));
    console.log(this.yspeed);
    console.log(this.xspeed);
    
    this.update = function() {
        this.pos.x += this.xspeed;
        this.pos.y += this.yspeed;
    }
    
    this.display = function (){
        push();
        stroke(255);
        strokeWeight(10);
        point(this.pos.x, this.pos.y);
        pop();
    }
}
    
    
//    this.x = x;
//    this.y = y;
//    this.size = 2;
//    this.color = color("white");
//    this.xspeed = 10;
//    this.yspeed = 10;
//    
//    
//    this.display = function() {
//        fill(this.color);
//        ellipse(spaceship.x, spaceship.y, this.size);
//    }
//    
//    this.update = function(){
//        this.x.add(this.xspeed, this.yspeed);
//    }


function mouseClicked() {
    bullets.push(new blaster(spaceship.x,spaceship.y));
    
}

function enemy () {
    this.x = random (0,width);
    this.y = random (0,height);
    this.size = random (30,30);
    this.color = color("blue");
    this.xspeed = 3;
    this.yspeed = 3;
    this.alive = true;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
    this.update = function() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
    
    this.edges = function () {
        if (this.x > width){
            this.xspeed = -this.xspeed;
        } else if (this.x < 0){
            this.xspeed = -this.xspeed;
        }
        if (this.y > height){
            this.yspeed = -this.yspeed;
        } else if (this.y < 0){
            this.yspeed = -this.yspeed;
        }
    }
    
    this.collide = function() {
        
    }
}