//circle class
class Circle {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 5;
    }

    //encapsulating
    update() {  //method that moves and draws circle
        this.y = this.y + this.speed;  //still in the class, keep vague/broad
        this.speed = this.speed + .1; //accelerates rain as it falls
        fill(this.color);
        new Circle(this.x, this.y, this.radius);
    }
}


//circle objects in array
var myCircles = [];
myCircles[0] = new Circle(100, 10, 100, [166, 214, 222]);
myCircles[1] = new Circle(900, 10, 100, [227, 0, 4]);


function setup() {
    //createCanvas(800,600);
}

function draw() {
    //background(208, 213, 219);
    rect(100, 100, 20, 40);
    console.log(bgijfcm);

//    //uses myCircle.y to control other properties
//    //object used to control stuff instead of singular variables
//    myCircle.y ++;
//    Circle(myCircle.x, myCircle.y, myCircle.radius);


    //invoking the method
    myCircles[0].update();
    myCircles[1].update();

}