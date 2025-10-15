function setup() {
    createCanvas(400, 400); 
    noLoop(); 
}

function draw() {
    // 2: ¿Qué hay de cena?
    background(6, 145, 20); // wooden table
    fill(355, 220, 0);
    ellipse(200, 200, 350, 350); // plate
    fill(255, 0, 0);
    ellipse(200, 200, 300,300); 
    //huevo 1
    fill(255, 255, 255);
    ellipse(200,220,200,100);

    //yema
    fill(232, 250, 20);
    stroke(100,10);
    ellipse(200,220,70,50);
}