//transform animation

var r = 0;
var x = 0;
var y = 0;

function setup() {
    createCanvas(600, 600);
}


function draw() {
    background('green');
    
    translate(width/2, height/2);
    
    //fighter 5
    push();
    rotate(r*3);
    fill("#f4d87c");
    rect(x, y, width/10, width/20);
    fill("blue");
    rect(x+width/40, y, width/20, width/20);
    pop();
    
    
    //fighter 6
    push();
    rotate(r*8);
    fill("#f4d87c");
    rect(x+width/10, -y, width/10, width/20);
    fill("blue");
    rect(x+width/40+width/10, y, width/20, width/20);
    pop();
    
    
    //Carrier model that doesn't move
    
    fill("blue");
    triangle(-width/10, -width/20, width/10, -width/20, 0, width/20);
    
    fill("#f4d87c");
    arc(0, -width/20, width/5, height/10, PI, PI);
    arc(-width/20, -width/1000, width/5, height/10, QUARTER_PI, PI+QUARTER_PI);
    arc(width/20, -width/1000, width/5, height/10, PI+HALF_PI+QUARTER_PI, PI-QUARTER_PI);
    
    ellipse(0, -width/100, width/20);
    
    fill("blue");
    ellipse(width/8, 0, width/50);
    ellipse(-width/8, 0, width/50);
    ellipse(-width/10, width/50, width/50);
    ellipse(width/10, width/50, width/50);
    
    
    // fighters that orbit the carrier
    
    //fighter 1
    push();
    rotate(r);
    fill("#f4d87c");
    rect(width/5, width/5, width/10, width/20);
    fill("blue");
    rect(width/5+width/40, width/5, width/20, width/20);
    pop();
    
    //fighter 2
    push();
    rotate(-r);
    fill("#f4d87c");
    rect(width/3, width/5, width/10, width/20);
    fill("blue");
    rect(width/3+width/40, width/5, width/20, width/20);
    pop();
    
    //fighter 3
    push();
    rotate(r*3);
    fill("#f4d87c");
    rect(width/5, width/20, width/10, width/20);
    fill("blue");
    rect(width/5+width/40, width/20, width/20, width/20);
    pop();
    
    r += 0.01;
    
    //fighter 4
    push();
    rotate(-r*5);
    fill("#f4d87c");
    rect(x+width/10, y-width/10, width/10, width/20);
    fill("blue");
    rect(x+width/40+width/10, y-width/10, width/20, width/20);
    pop();
    
    x+=0.5;
    
    if(x>width/2||y<-width/2)
        {x*= -1};
    
    if(y>width/2||y<-width/2)
        {y*= -1};
    
}
