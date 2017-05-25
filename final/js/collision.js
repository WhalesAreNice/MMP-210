var spaceship;
var enemies = [];
var bullets = [];
var additional = 0
var score = 0;
var gameState = 0;
var delay = 100;
var interval = 30;

function setup () {
    createCanvas(1000,600);
    background("black");
    frameRate(60);
    noCursor();

}

function keyPressed (){
    if (gameState == 0 || gameState == 2 && delay == 0) {
        gameState = 1;
        gameStart();
        
    }
}

function draw (){
    
    if (gameState == 0){
        push();
        translate(width/2, height/2);
        fill('white');
        textSize(100);
        textAlign(CENTER);
        text("Space Shooter", 0, -50);
        textSize (60);
        text("Press any Key to Start", 0 , 50);
        pop();
    }else if(gameState == 1){
        game();
    } else if (gameState == 2){
        
        spaceship.explode();
        
        push();
        translate(width/2, height/2);
        fill('white');
        textSize(100);
        textAlign(CENTER);
        text("Game Over", 0, -50);
        textSize (60);
        text("Final Score: " + score, 0 , 50);
        
        
        if(delay > 0){
            delay--;
        } else {
            text("Press any Key to Play Again", 0 , 150);
        }
        
        pop();
        
        
    }
}


function game () {
    background("black");
    crosshair();
    if (spaceship.alive){
        spaceship.display();
        spaceship.edges();
    } else {
        spaceship.explode();
    }
    
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
    
    
    //enemies
    for (var j = 0; j < enemies.length; j++) {
            enemies[j].display();
            enemies[j].update();
            enemies[j].edges();  
        
        if (enemies[j].hits(spaceship)){
            
            }
        
            }
    
    //bullets
    var destroyEnemies = [];
    for (var i = 0; i < bullets.length; i++) {
            
        
            bullets[i].display();
            bullets[i].update();

            //enemies
            for (var j = 0; j < enemies.length; j++) {
                if(enemies[j].alive){


                    if(bullets[i].hits(enemies[j])){
                        destroyEnemies.push(j);
                    }
                }
            }      
    }
    for (var i = 0; i < destroyEnemies.length; i++) {
     enemies.splice(destroyEnemies[i], 1);   
    }
    
    if (frameCount%interval == 0) {
        enemies.push(new enemy());
        additional++;
    }
    
    if (interval > 1 && frameCount%60 == 0){
        interval--;
    }
    
    
    push();
    fill('white');
    textSize(30);
    text("Score: " + score, 5, 35);
    pop();
    
}

function Spaceship () {
    this.size = 50;
    this.x = width/2;
    this.y = height/2;
    this.xSpeed = 10;
    this.ySpeed = 10;
    this.alive = true;
    
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
    
//    this.collide = function(enemies.x, enemies.y, enemies.size){
//        var d = dist(this.x, this.y, enemies.x, enemies.y);
//        if (d < this.size + enemies.size){
//            console.log('HITS');
//        }
//    }
    
    this.explode = function(){
        fill("red");
        ellipse(this.x, this.y, this.size);
        this.alive = false;
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
    push();
    fill('white');
    stroke('white');
    strokeWeight(3);
    line(mouseX,mouseY+4,mouseX,mouseY+10);
    line(mouseX,mouseY-4,mouseX,mouseY-10);
    line(mouseX+4,mouseY,mouseX+10,mouseY);
    line(mouseX-4,mouseY,mouseX-10,mouseY);
    pop();
}

function blaster (x,y) {
    this.pos = createVector(x,y);
    this.vel = (this.xspeed, this.yspeed);
    this.speed = 15;
    this.alive = true;
    
    var xdir = mouseX - x < 0 ? -1 : 1;
    var ydir = mouseY - y < 0 ? -1 : 1;
    
    if(abs(mouseX-x) > abs(mouseY-y)){
        this.xspeed = this.speed * xdir;
        this.yspeed = this.speed * ydir * (abs(mouseY-y) / abs(mouseX-x));
    } else {
        this.xspeed = this.speed * xdir * (abs(mouseX-x) / abs(mouseY-y));
        this.yspeed = this.speed * ydir;
    }
    
    
//    this.xspeed = sqrt(sq(this.speed)-sq(y-mouseY));
//    this.yspeed = sqrt(sq(this.speed)-sq(mouseX-x));
//    console.log(this.yspeed);
//    console.log(this.xspeed);
    
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
    
    this.hits = function (e){
        var d = dist(this.pos.x, this.pos.y, e.x, e.y);
        if (d < e.size+10) {
            e.explode();
            this.alive = false;
            return true;
        } else {
            return false;
        }
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
    if (gameState == 1 && spaceship.alive){
        bullets.push(new blaster(spaceship.x,spaceship.y));
    }
    
}

function enemy () {
    
    this.x = random (0,width);
    this.y = random (0,height);
    
    
    while(dist(this.x, this.y, spaceship.x, spaceship.y)< 100){
            this.x = random (0,width);
            this.y = random (0,height);
          }
    
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
    
    this.explode = function (){
        push();
        fill('red');
        //this.alive = false;
        ellipse(this.x, this.y, this.size*4/3);
        pop();
        score++;
    }
    
    this.hits = function (s){
        var d = dist(this.x, this.y, s.x, s.y);
        if (d < s.size/2) {
            s.explode();
            gameOver();
            
        }
    }
    
}

function gameStart (){
    spaceship = new Spaceship();
    for(var i = 0; i < 10; i++) {
        enemies.push(new enemy());
    }
    score = 0;
}

function gameOver(){
    gameState = 2;
    enemies = [];
    bullets = [];
    delay = 100;
    
}