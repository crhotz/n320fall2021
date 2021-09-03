class Circle {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
        this.speed = 3 + Math.random() * 6;
    }

        //encapsulating
        update() {
            this.y = this.y + this.speed;
            this.speed = this.speed + .05;
            fill(this.color);
            circle(this.x, this.y, this.radius);
        }
}

var raindrops = [];
raindrops[0] = new Circle(50, 20, 16, [242, 249, 255]);
raindrops[1] = new Circle(350, 20, 24, [0, 132, 255]);

function setup() {
    createCanvas(800,600);
}

function draw() {

    background(208, 213, 219);

    raindrops[0].update();
    raindrops[1].update();

}