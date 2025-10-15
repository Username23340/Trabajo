function setup() {
    createCanvas(400, 400); 
    noLoop(); 
}

function draw() {
    // 4: Dientes de conejo
    var e1 = 20;
    ellipse(150, 70, 60, 120);  // left ear
    ellipse(240, 70, 60, 120);  // right ear

    ellipse(200, 170, 150, 150);    // face  

    fill(0, 0, 0);
    ellipse(170, 150, e1, e1);  // left eye
    ellipse(230, 150, e1, e1);  // right eye

    line(150, 200, 250, 200);   // mouth
    var t1 = 20;
    noFill();
    rect(185, 200, 15, t1); // left tooth
    rect(200, 200, 15, t1); // right tooth

    ellipse(170,150,20,20);
    ellipse(230,150,20,20);
}