function setup () {
    createCanvas(1000,600);
    background("black");
    
    noCursor();
    
    
}
 
function draw () {
    background("black");
    //variables
    var shipWidth = 200; //spaceship's width
    
    //spaceship
    fill('white');
    noStroke();
    quad(shipWidth/2, 0, shipWidth, shipWidth, shipWidth/2, shipWidth/4*3, 0, shipWidth);
    
    //crosshair mouse pointer
    fill('white');
    stroke('white');
    strokeWeight(3);
    line(mouseX,mouseY+4,mouseX,mouseY+10);
    line(mouseX,mouseY-4,mouseX,mouseY-10);
    line(mouseX+4,mouseY,mouseX+10,mouseY);
    line(mouseX-4,mouseY,mouseX-10,mouseY);
    
    console.log();
}