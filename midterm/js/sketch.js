function setup() {
    createCanvas (600,600);
    background ("black");
}

function draw() {
    stroke("white");
    strokeWeight(1);
    
    var lineNum = 100;
    var column = Math.sqrt(lineNum);
    var row = Math.sqrt(lineNum);
    var w = width/column;
    var h = height/row;
    
    for (var x = 0; x <= width; x+=20){
        for (var y = 0; y <= height; y+=20){
            
            var tempX = x;
            var tempW = w;
            var tempH = h;
            
            
            var r = random(0,2);
            
            if (r<1){
                line(x, y, x+20, y+20);
            } else {
                line(x+20, y, x, y+20);
            }
            
            console.log(r);
            
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
    
        
    }
    
    


}