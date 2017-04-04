function setup() {
    createCanvas(640, 640);
    background("white");
    stroke("green");
    noStroke();
    
    var numberOfRectangles = 200;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);
    var w = width/columns;
    var h = height/rows;
    
    for(var x = 0; x <= width; x+=w){
        for(var y = 0; y <= height; y+=h){  
            
            
            var r,g,b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
            
            
            
            //rain
            if(y < height/4){
                //random rain blue color
                r = random (0, 50);
                g = random (150, 255);
                b = random(200, 255);
                //random rain size and position
                x+= random(-25, 25);
                w = random(10, 20);
            } else if (y > height * 3/4){
                //random flower color
                r = random (200,255);
                g = random (0, 100);
                b = random (100, 200);
                //random flower size
                w = h = random (10,40);
            }
            
            else{
                //random green grass color
                r = random(100,180);
                g = random(0,150);
                b = random(0, 100);
            }
            
            //all color fills
            fill(r,g,b);
                 
            
            
            //flowers
            if(y > height*3/4){
                //flowers
                ellipse(x, y, w, h);
                
                //stem
                fill(
                    random(0,50),
                    random(150, 255),
                    random(0,100)
                    );
                
            } else {
                rect(x, y, w, h);
            }
            
            
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
    }
    
}

