class Circle {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
    }


}

var raindrop = new Circle(50, 20, 30, [24, 24, 25]);
console.log(raindrop);

function setup() {
    createCanvas(800,600);
}

function draw() {

    background(208, 213, 219);

    raindrop.y ++;
    circle(raindrop.x, raindrop.y, raindrop.radius);
}