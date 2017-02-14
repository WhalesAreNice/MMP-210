function setup() {
    createCanvas(800, 800);
    background('lightgray');
    
    fill("#1c1919");
    noStroke();
    rect(200, 130, 320, 250);
    arc(370, 165, 370, 240, 0, 0);
    triangle(185, 155, 200, 380, 300, 300);
    triangle(580, 200, 600, 360, 520, 170);

    stroke(1);
    fill('#ffd5a5');
    ellipse(205, 380, 30, 70);
    ellipse(595, 380, 30, 70);
    ellipse(400, 400, 400, 540);
    
    fill('white');
    ellipse(300, 380, 80, 40);
    ellipse(500, 380, 80, 40);
    
    fill('black');
    ellipse(300, 380, 40);
    ellipse(500, 380, 40);
    
    noFill();
    arc(365, 480, 40, 40, HALF_PI, PI+QUARTER_PI);
    arc(435, 480, 40, 40, PI+HALF_PI+QUARTER_PI, HALF_PI);
    arc(360, 425, 30, 70, PI+HALF_PI+QUARTER_PI, HALF_PI);
    arc(440, 425, 30, 70, HALF_PI, PI+QUARTER_PI);
    arc(380, 495, 20, 5, 0, PI);
    arc(420, 495, 20, 5, 0, PI);
    
    fill('#f9ada4');
    arc(400, 570, 130, 50, 0, PI);
    triangle(334, 570, 385, 550, 420, 570);
    triangle(380, 570, 415, 550, 466, 570);
    noStroke();
    arc(400, 570, 130, 20, PI, 0);
    stroke(1);
    
    fill('#1c1919');
    triangle(240, 320, 350, 330, 265, 300);
    triangle(450, 330, 560, 320, 535, 300);
    
    noStroke();
    rect(230, 130, 318, 80);
    triangle(260, 200, 230, 280, 200, 300);
    triangle(530, 170, 570, 280, 590 ,300);
    
}
