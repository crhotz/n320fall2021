
let cx = 20;

function setup() {
    console.log("setup")
    createCanvas(800,600);
}

function draw() {
    console.log("draw")
    background(208, 213, 219);

    cx++;
    circle(50, cx, 30);
}