
let cx = 20;

function setup() {
    console.log("setup")
}

function draw() {
    console.log("draw")

    cx++;
    circle(50, cx, 30);
}