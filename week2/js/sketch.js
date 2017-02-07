function setup() {
    createCanvas(640, 480);
    background('lightgray');

    fill('yellow');
    ellipse(300, 300, 500);
    
    fill('orange');
    rect(175,175, 50, 50);
    rect(275,175, 50, 50);
    line(250, 245, 200, 350);
    
    fill('red');
    triangle(175, 395, 325, 400, 345, 380);
    
    fill('yellow');
    arc(450, 280, 70, 90, PI+1, HALF_PI+0.5);
}
