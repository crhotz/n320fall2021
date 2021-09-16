let base = document.getElementById('neat');

//class for washing machine (front loading)
class WashingMachine {

    //properties for base color, frontCircle location, frontCircle radius,
        //front circleColor, w, h, dial position, dial r, dialColor
        baseColor = [80,80,80];
        frontCircle = { x: 100, y: 100 };
        frontCircle_radius = 50;
        frontCircle_color = [70,70,70];
        x = 100;
        y = 100;
        w = 200;
        h = 200;
        dial = { x: 100, y: 100 };
        dial_radius = 10;
        dial_color = [34, 79, 242];

    //constructor
    constructor() {
        //washing machine
        let washEl = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        washEl.setAttribute("x", this.x);
        washEl.setAttribute("y", this.y);
        washEl.setAttribute("w", this.w);
        washEl.setAttribute("h", this.h);
        washEl.setAttribute("fill", `rgb(${this.baseColor[0]},${this.baseColor[1]},${this.baseColor[2]})`);
        console.log(`rgb(${this.baseColor[0]},${this.baseColor[1]},${this.baseColor[2]})`);
        base.appendChild(washEl);

        console.log(`rect(${this.x}, ${this.y}, ${this.w}, ${this.h})`);

        //frontCircle
        let frontCircleEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        frontCircleEl.setAttribute("cx", this.frontCircle.x);
        frontCircleEl.setAttribute("cy", this.frontCircle.y);
        frontCircleEl.setAttribute("r", this.frontCircle_radius);
        frontCircleEl.setAttribute("fill", `rgb(${this.frontCircle_color[0]},${this.frontCircle_color[1]},${this.frontCircle_color[2]})`);
        console.log(`rgb(${this.frontCircle_color[0]},${this.frontCircle_color[1]},${this.frontCircle_color[2]})`);
        base.appendChild(frontCircleEl);

        //dial
        let dialEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dialEl.setAttribute("cx", this.dial.x);
        dialEl.setAttribute("cy", this.dial.y);
        dialEl.setAttribute("r", this.dial_radius);
        dialEl.setAttribute("fill", `rgb(${this.dial_color[0]},${this.dial_color[1]},${this.dial_color[2]})`);
        console.log(`rgb(${this.dial_color[0]},${this.dial_color[1]},${this.dial_color[2]})`);
        base.appendChild(dialEl);
    }

    //method for draw (draw image to screen w/ svg)
    draw() {
        console.log('bedvnficmdxo');
    }

}

new WashingMachine();

//class for washing machine mngmnt
    //base machine: WashingMachine instance (will be used for generation
        //of new machines->replaced when user selects new one)
    //currentMachines: array of all washingMachines generated in this gen.
    //createMachines method: creates 10 new mach.s(for loop) w/ var based on an input mach.'s
        //properties (rand +/- into those vars), draws those mach.s
    //selectMachine: selects a mach. and creates 10 new mach.s based off it
    //removeMachines: removes all mach.s on screen

