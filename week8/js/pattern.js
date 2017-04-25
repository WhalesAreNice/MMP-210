

function setup (){
    createCanvas (400,400);
    
        
    var tileWidth = 40;
    var arcRadius = tileWidth;
    var x = 0;
    var y = 0;
    var r,g,b;
    
    r = random(0,10);
    g = random(30,100);
    b = random(30,100);
    
    background(r,g,b);
    
    strokeWeight(tileWidth/8);
    stroke(r,g,b);
    fill(r,g,b,127);
    
    
    
    for(var i = 0; i<10; i++){
        for(var h = 0; h<10;h++){
            
            if ((h+i) % 4 == 0){
                firstArc(x+i*tileWidth,y+h*tileWidth,arcRadius,tileWidth,r,g,b);
            };
            if ((h+i) % 4 != 1) {
                secondArc(x+i*tileWidth,y+h*tileWidth,arcRadius,tileWidth,r,g,b);
            };
            if ((h+i) % 4 == 2){
                firstArc(x+i*tileWidth,y+h*tileWidth,arcRadius,tileWidth,r,g,b);
            };
            if ((h+i) % 4 != 3) {
                secondArc(x+i*tileWidth,y+h*tileWidth,arcRadius,tileWidth,r,g,b);
            };
        };
    };
    
//    firstArc(x,y,arcRadius,tileWidth);
//    secondArc(x,y,arcRadius,tileWidth);
}




function firstArc (x,y,arcRadius,tileWidth,r,g,b){
    fill(r,g,b,127);
    r = random(255);
    g = random(255);
    b = random(255);
    noStroke();
    rect(x,y,tileWidth,tileWidth);
    
    fill(r,g,b,127);
    stroke(r,g,b);
    arc(x,y,arcRadius,arcRadius, 0, HALF_PI);
    arc(x+tileWidth, y+tileWidth, arcRadius, arcRadius, PI, PI+HALF_PI);
}

function secondArc(x,y,arcRadius,tileWidth,r,g,b){
    
    fill(r,g,b,127);
    r = random(255);
    g = random(255);
    b = random(255);
    noStroke();
    rect(x,y,tileWidth,tileWidth);
    
    fill(r,g,b,127);
    stroke(r,g,b);
    arc(x,y+tileWidth,arcRadius,arcRadius, PI+HALF_PI, 0);
    arc(x+tileWidth, y, arcRadius, arcRadius, HALF_PI, PI);
}