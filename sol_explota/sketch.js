var sunSize = 30; 
var sunY = 300; 

function setup() {
    createCanvas(400, 400); 
}

function draw() {
    // 6: Sol que explota
    noStroke(); 
    
    sunSize = sunSize + 1; 
    
    background(82, 222, 240); 
    
    fill(255, 170, 0); 
    ellipse(200, 298, sunSize, sunSize); 
    
    fill(70, 168, 67); 
    rect(0, 300, 400, 100); 
    
    if (sunSize > 600) {
        sunSize = 30;
    }
}