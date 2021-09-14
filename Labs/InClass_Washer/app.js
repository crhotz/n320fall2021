let base = document.getElementById('neat');

//class for washing machine (front loading)
class WashingMachine {

    //properties for base color, frontCircle location, frontCircle radius,
        //front circleColor, w, h, dial position, dial r, dialColor
        baseColor = [0,0,0];
        frontCircle_location = { x: 0, y: 0 };
        frontCircle_radius = 10;
        frontCircle_color = [0,0,0];
        w = 5;
        h = 5;
        dial_position = { x: 0, y: 0 };
        dial_radius = 1;
        dial_color = [0,0,0];

    //constructor
    constructor() {
        let washEl = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        washEl.setAttribute("fill", `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`);
        console.log(`rgb(${this.color[0]},${this.color[1]},${this.color[2]})`);
    }

    //method for draw (draw image to screen w/ svg)

}



//class for washing machine mngmnt
    //base machine: WashingMachine instance (will be used for generation
        //of new machines->replaced when user selects new one)
    //currentMachines: array of all washingMachines generated in this gen.
    //createMachines method: creates 10 new mach.s w/ var based on an input mach.'s
        //properties (rand +/- into those vars), draws those mach.s
    //selectMachine: selects a mach. and creates 10 new mach.s based off it
    //removeMachines: removes all mach.s on screen

