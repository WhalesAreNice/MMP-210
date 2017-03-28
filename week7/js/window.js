function setup() {
    createCanvas(600, 300);
}


function draw() {
    background('#98a391');
    
    //variables
    var win_width = width/5;
    var win_height = height/5;
    var pos_x = width/5;
    var pos_y = height/5;
    var strokeW8 = win_width/75;
    var x = 0;
    var y = 0;
    
    for (var i = 0; i < 6; i++){
        for (var h = 0; h <5; h++){
        drawWindow(x+i*75, y+h*65,  pos_x, pos_y);
            };
    };
}
    
    function drawWindow (x, y,  pos_x, pos_y) {
        noStroke();
            //window frame
            fill('black');
            arc(x, y, pos_x, pos_y, PI, HALF_PI+PI);

            //red window
            fill('#c14d3e');
            arc(x-pos_x/40, y-pos_y/25, pos_x-pos_x/8, pos_y-pos_y/5, PI, HALF_PI+PI);

            //window black block
            fill('black');
            arc(x, y-pos_y/3, pos_x-pos_x/3, pos_y-pos_y/1.4, PI, HALF_PI+PI); 

            //window lines
            stroke(1);
            strokeWeight(pos_x/75);
            line(x-pos_x/6, y-pos_y/20, x-pos_x/6, y-pos_y/7*3);
            line(x-pos_x/3, y-pos_y/20, x-pos_x/3, y-pos_y/3);

            //air conditioner
            noStroke();
            fill('#fff2dd');
            rect(x-pos_x/6, y-pos_y/14*3, pos_x-pos_x/20*17, pos_y-pos_y/5*4);
            fill('#bcbcbc');
            rect(x-pos_x/120*19, y-pos_y/140*28, pos_x-pos_x/200*173.5, pos_y-pos_y/50*41.5);
    
    }
    
    
    
//    for(var x=pos_x;x<width;x+=pos_x)
//        {
//        for(var y=pos_y;y<height;y+=pos_y)
//        {
//            noStroke();
//            //window frame
//            fill('black');
//            arc(x, y, win_width, win_height, PI, HALF_PI+PI);
//
//            //red window
//            fill('#c14d3e');
//            arc(x-pos_x/40, y-pos_y/25, win_width-win_width/8, win_height-win_height/5, PI, HALF_PI+PI);
//
//            //window black block
//            fill('black');
//            arc(x, y-pos_y/3, win_width-win_width/3, win_height-win_height/1.4, PI, HALF_PI+PI); 
//
//            //window lines
//            stroke(1);
//            strokeWeight(strokeW8);
//            line(x-pos_x/6, y-pos_y/20, x-pos_x/6, y-pos_y/7*3);
//            line(x-pos_x/3, y-pos_y/20, x-pos_x/3, y-pos_y/3);
//
//            //air conditioner
//            noStroke();
//            fill('#fff2dd');
//            rect(x-pos_x/6, y-pos_y/14*3, win_width-win_width/20*17, win_height-win_height/5*4);
//            fill('#bcbcbc');
//            rect(x-pos_x/120*19, y-pos_y/140*28, win_width-win_width/200*173.5, win_height-win_height/50*41.5);
//            
//            
//        }
//    }
//}
