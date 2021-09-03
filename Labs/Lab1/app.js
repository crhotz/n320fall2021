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
            this.speed = this.speed + .1;
            fill(this.color);
            circle(this.x, this.y, this.radius);
        }
}

var raindrops = [];
raindrops[0] = new Circle(553, 12, 18, [204, 231, 255]);
raindrops[1] = new Circle(435, 8, 24, [204, 231, 255]);
raindrops[2] = new Circle(72, 11, 19, [204, 231, 255]);
raindrops[3] = new Circle(613, 3, 24, [204, 231, 255]);
raindrops[4] = new Circle(321, 14, 16, [204, 231, 255]);
raindrops[5] = new Circle(195, 10, 24, [204, 231, 255]);
raindrops[6] = new Circle(750, 2, 19, [204, 231, 255]);
raindrops[7] = new Circle(248, 9, 24, [204, 231, 255]);
raindrops[8] = new Circle(649, 5, 17, [204, 231, 255]);
raindrops[9] = new Circle(350, 15, 24, [204, 231, 255]);
raindrops[10] = new Circle(794, 12, 16, [204, 231, 255]);
raindrops[11] = new Circle(707, 4, 24, [204, 231, 255]);
raindrops[12] = new Circle(38, 1, 18, [204, 231, 255]);
raindrops[13] = new Circle(10, 7, 24, [204, 231, 255]);
raindrops[14] = new Circle(136, 13, 17, [204, 231, 255]);
raindrops[15] = new Circle(486, 6, 24, [204, 231, 255]);
raindrops[16] = new Circle(773, 2, 19, [204, 231, 255]);
raindrops[17] = new Circle(102, 9, 24, [204, 231, 255]);
raindrops[18] = new Circle(679, 5, 17, [204, 231, 255]);
raindrops[19] = new Circle(405, 15, 24, [204, 231, 255]);
raindrops[20] = new Circle(294, 12, 16, [204, 231, 255]);
raindrops[21] = new Circle(479, 4, 24, [204, 231, 255]);
raindrops[22] = new Circle(583, 1, 18, [204, 231, 255]);
raindrops[23] = new Circle(510, 7, 24, [204, 231, 255]);
raindrops[24] = new Circle(376, 13, 17, [204, 231, 255]);



function setup() {
    createCanvas(800,600);
}

function draw() {

    background(208, 213, 219);

    raindrops[0].update();
    raindrops[1].update();
    raindrops[2].update();
    raindrops[3].update();
    raindrops[4].update();
    raindrops[5].update();
    raindrops[6].update();
    raindrops[7].update();
    raindrops[8].update();
    raindrops[9].update();
    raindrops[10].update();
    raindrops[11].update();
    raindrops[12].update();
    raindrops[13].update();
    raindrops[14].update();
    raindrops[15].update();
    raindrops[16].update();
    raindrops[17].update();
    raindrops[18].update();
    raindrops[19].update();
    raindrops[20].update();
    raindrops[21].update();
    raindrops[22].update();
    raindrops[23].update();
    raindrops[24].update();
}


