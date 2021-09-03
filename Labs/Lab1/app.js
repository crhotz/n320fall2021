
let cx = 20;

class Circle {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
    }
}

var raindrop = new Circle(50, 20, 30, [242, 249, 255]);

function setup() {
    createCanvas(800,600);
}

function draw() {

    background(208, 213, 219);

    cx++;
    circle(50, cx, 30);
}