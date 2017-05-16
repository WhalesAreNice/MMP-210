var shipWidth = 50; //spaceship's width
var shipX = 0;

function setup () {
    createCanvas(1000,600);
    background("black");
    
    noCursor();
    
    
}
 
function draw () {
    background("black");
    //variables
    var shipWidth = 50; //spaceship's width
    var shipX = 0;
    
    //spaceship
    
    
    fill('white');
    noStroke();
    quad(shipWidth/2 + shipX, 0, shipWidth + shipX, shipWidth, shipWidth/2 + shipX, shipWidth/4*3, 0 + shipX, shipWidth);
    
    
    //crosshair mouse pointer
    fill('white');
    stroke('white');
    strokeWeight(3);
    line(mouseX,mouseY+4,mouseX,mouseY+10);
    line(mouseX,mouseY-4,mouseX,mouseY-10);
    line(mouseX+4,mouseY,mouseX+10,mouseY);
    line(mouseX-4,mouseY,mouseX-10,mouseY);
    
    console.log();
    
    
    
    // others
    
    for (var i = 0; i < others.length; i++) {
        others[i].display();
    }
    
    
}

function mousePressed() {
    for (var i = 0; i < others.length; i++) {
        others[i].collide(mouseX, mouseY);
    }
}


function others() {
    this.x = random (0,width);
    this.y = random (0,height);
    this.size = random (10,30);
    this.color = color("blue");
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
    this.collide = function() {
        
    }
}