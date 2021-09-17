//class containing the game's logic
class Game {

    //class properties
    foundCircles = 0;
    totalcircles = 0;
    searchColor = "99FF00";
    normalColor = "7700AA";
    gameZone = document.getElementById("gameZone"); //ref to SVG element in index.html

    constructor() {
        //make the circles
        for(var i = 0; i < 25; i++) {
            //create circle
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            
            //circle style class
            newCirc.classList.add("gameCirc");
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);

            //randomly choose what reveal color circle is
            if(Math.random() < .3) {
                //set to be the 'looking for' color
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalcircles ++;
            } else {
                newCirc.dataset.hiddenColor = this.normalColor;
            }

            //mouse events
            //on mouseover, show hidden color in data-hiddenColor attribute
            newCirc.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            })

            //add circle to the screen
            this.gameZone.appendChild(newCirc);
        }
    }

}

let g = new Game();