class Circle {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
    }

        //encapsulating
        update() {
            this.y ++;
            circle(this.x, this.y, this.radius);
        }
}

var raindrop = new Circle(50, 20, 30, [242, 249, 255]);
console.log(raindrop);

function setup() {
    createCanvas(800,600);
}

function draw() {

    background(208, 213, 219);

    raindrop.update();
}