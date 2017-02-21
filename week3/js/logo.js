function setup() {
    createCanvas(400, 400);
    background("black");

    var x = 220;
    var y = 200;
    
    
    rectMode(CENTER);
    
//    var repeat = rect(x, y, 800*count, 400*count,
    var count = 0;
    
    var initial1 = "A";
    var initial2 = "N";
    var lh = 450; //line height
    
    
    textFont("Arial");
    textAlign(CENTER);
    textStyle(BOLD);
    noStroke();
    
    
    while (count<=255)
        {
            lh-=9;
            textSize(lh);
            fill(255-count, 0+count, 255-count);
            rotate(5.3);
            text(initial1, x/2, y+lh*16/45);
            text(initial2, x/2*3, y+lh*16/45);
            rotate(15.4);
            count+=12;
            console.log(count, lh);
        }
    
    
    
    
    
    
    
    
    
}