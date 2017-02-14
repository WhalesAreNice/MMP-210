function setup() {
    createCanvas(800, 800);
    
    var gr = color('#dbdbdb'); //gray
    var lb = color('#82f6ff'); //lightblue
    var p = color('#c863ff'); //purple
    var o = color('#ff7b4f'); //orange
    var b = color('#1749a5'); //blue
    var r = color('#a51e00'); // red
    var g = color('#39d80d'); //green
    var lp = color('#a5a1e2'); //light purple
    var pi = color('#ff56e8'); //pink
    var dg = color('#64a055'); //darkgreen
    var w = color('#ffffff'); //white
    var k = color('#000000'); //black
    
    var sw = 3;
    var sw2 = 2;
    
    var yn100 = -100;
    var y100 = 100;
    var y300 = 300;
    var y350 = 350;
    var y430 = 430;
    var y450 = 450;
    var y500 = 500;
    var y700 = 700;
    var y900 = 900;
    
    var xn500 = -500;
    var x100 = 100;
    var x200 = 200;
    var x250 = 250;
    var x350 = 350;
    var x360 = 360;
    var x440 = 440;
    var x450 = 450;
    var x550 = 550;
    var x600 = 600;
    var x700 = 700;
    var x1300 = 1300;
    
    var rw400 = 400;
    var rw100 = 100;
    var rh100 = 100;
    var rh200 = 200;
    
    var ec = 400;
    var e130 = 130;
    var ew45 = 45;
    var eh30 = 30;
    
    var aw29 = 29;
    var aw18 = 18;
    var ay388 = 388;
    var ay390 = 390;
    var ah35 = 35;
    var ah10 = 10;
    var ah6 = 6;
    var ah20 = 20;
    
    var ly335 = 335;
    var ly443 = 443;
    var ly430 = 430;
    var lx360 = 360;
    var lx440 = 440;
    var ly353 = 353;
    var ly447 = 447;
    
    
    background(gr);
    
    noStroke();
    fill(lb);
    quad(xn500, y100, x100, yn100, x350, y350, x200, y350);
    quad(x1300, y100, x700, yn100, x450, y350, x600, y350);
    
    fill(p);
    quad(xn500, y700, x100, y900, x350, y450, x200, y450);
    quad(x1300, y700, x700, y900, x450, y450, x600, y450);
    
    fill(o);
    quad(x100, yn100, x350, y350, x350, y300, x250, yn100);
    quad(x700, yn100, x450, y350, x450, y300, x550, yn100);
    
    fill(b);
    quad(x100, y900, x350, y450, x350, y500, x250, y900);
    quad(x700, y900, x450, y450, x450, y500, x550, y900);
    
    fill(r);
    quad(x350, y300, x450, y300, x550, yn100, x250, yn100);
    quad(x350, y500, x450, y500, x550, y900, x250, y900);
    
    fill(g);
    quad(xn500, y100, xn500, y700, x200, y450, x200, y350);
    quad(x1300, y100, x1300, y700, x600, y450, x600, y350);
    
    fill(lp);
    rect(x200, y350, rw400, rh100);
    rect(x350, y300, rw100, rh200);
    
    
    fill(pi);
    stroke(1);
    strokeWeight(sw);
    ellipse(ec, ec, e130, e130);
    
    
    fill(dg);
    triangle(400, y350, x360, y430, x440, y430);
    line(ec, y350, ec, ly335);
    line(lx360, ly430, ly353, ly443);
    line(lx440, ly430, ly447, ly443);
    
    fill(w);
    strokeWeight(sw2);
    ellipse(ec, ec, ew45, eh30);
    
    
    fill(k);
    arc(ec, ay390, aw29, ah10, PI, 0);
    arc(ec, ay390, aw29, ah35, 0, PI);
    
    fill(w);
    arc(ec, ay388, aw18, ah6, PI, 0);
    arc(ec, ay388, aw18, ah20, 0, PI);
         
    
}