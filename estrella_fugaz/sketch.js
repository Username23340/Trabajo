var xPos = 3; 
var yPos = 2; 
var x2Pos = 4; 
var y2Pos = 4; 

function setup() {
    createCanvas(400, 400); 
}

function draw() {
    // 8: Estrella fugaz
    var xPos = 200;
    var yPos = 200;
    var x2Pos = 4;
    var y2Pos = 4;

    draw = function() {
    background(77, 31, 26);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    fill(255, 150, 10);
    rect(0,300,120,100);
    rect(150,250,100,150);
    rect(270,320,200,80);
    
    fill(255, 200, 0);

    rect(30,330,12,8);
    rect(10,330,12,8);
    rect(70,330,12,8);
    rect(90,330,12,8);
    rect(70,350,12,8);
    rect(90,350,12,8);
     xPos += 5;
     yPos += 5;
     
     if(xPos > 600) {
         xPos = 0;
         yPos = 0;
      }
     fill (255, 242, 0);
     ellipse(50, 80, 6, 6);
     ellipse(250, 30, 8, 8);
     ellipse(300, 250, 2, 2);
     ellipse(20, 60, 2, 2);
     ellipse(100, 250, 6, 6);
     ellipse(60, 140, 5, 5);
     ellipse(180, 80, 6, 6);
     ellipse(250, 180, 6, 6);
};
 
}