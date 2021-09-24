function setup() {
	createCanvas(500, 500);
}


//create grid
function draw() {
  //number of rows and columns
  var s = 5;
	background(100);
	//For (var BEGIN; END; INTERVAL){
	//DO SOMETHING }
	for (var x = 0; x < width; x += width / s) {
		for (var y = 0; y < height; y += height / s) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height); //column lines
			line(0, y, width, y); //row lines
		}
	}
}

//triangle
class Triangle {
    constructor(shape, color, border) {
        this.shape = triangle(38, 75, 58, 20, 78, 75);
        this.color = fill(f2f2f2);
    }
   
}