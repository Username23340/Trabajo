function setup() {
    createCanvas(400, 400); 
    noLoop(); 
}

function draw() {
    // 3: Día nevado soleado
    fill(235, 120, 0);
background(455, 100, 200);

// The ground
rect(0, 300, 400, 100);  


// The sun
fill(555, 520, 0);
ellipse(80, 64, 100, 100);  
fill(9999, 9999, 9999);
// The snowman
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);


}