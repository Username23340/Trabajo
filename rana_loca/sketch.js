function setup() {
    createCanvas(400, 400); 
    noLoop(); 
}

function draw() {
    // 5: Rana
    background(100, 180, 255); 
    var x = 200; 
    var y = 250; 
    noStroke(); 
    fill(2, 120, 44); 
    ellipse(x, y, 200, 100); 
    ellipse(x - 50, y - 50, 40, 40); 
    ellipse(x + 50, y - 50, 40, 40); 
    fill(255, 255, 255); 
    ellipse(x - 50, y - 50, 30, 30); 
    ellipse(x + 50, y - 50, 30, 30); 
    fill(0); 
    ellipse(x, y , 120, 40); 
    fill(0); 
    rect(x - 55,y - 55, 10, 10); 
    rect(x + 45,y - 55, 10, 10); 
}