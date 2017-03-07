function setup() {
    createCanvas(640, 360);
    
    
    frameRate(30);
    textSize(20);
    textSize(30);
    textAlign(CENTER);
}

function draw() {
    background("black");
    
     //variables
    var count = frameCount;
    var count2 = frameCount;
    var shapeSize = 20;
    var ellipseWidth = 0;
    
    
    
    /* draw a grid */
    stroke("white");
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    
    //making frameCount into a resetable number so it doesn't get too big
    
    while (frameCount>100 && count>100) 
        {
            count -= 100;
        }
    
    while(frameCount>730 && count2>730)
        {
            count2 -=640;
        }
    
    //text count that moves with mouse
    
    fill(200-count, 100+count, 0+count);
    textSize(count);
    textAlign(CENTER);
    text(count, mouseX, mouseY);
    
    //ellipse that moves along the x-axis
    fill(100-count, 200-count, 100+count)
    ellipse(count2, height/2, count2/5, count2/5);
}