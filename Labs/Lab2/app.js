//instrument class (base class)
class Instrument {
    //set properties
    constructor(loudness, family, play_verb) {
        this.loudness = loudness;
        this.family = family;
        this.play_verb = play_verb;
    }

    //method for playing the instrument
    playing() {
        console.log(this.family + " " + this.play_verb + " at " + this.loudness);
    }
}


//concrete classes

//woodwind class
class Woodwind extends Instrument {
    constructor(loudness) {
        super(); //takes 3 arguments //encapsulate the 2
        this.family = "Woodwind";
        this.play_verb = "blows";
        this.loudness = loudness;
    }
}

//percussion class
class Percussion extends Instrument {
    constructor(loudness) {
        super();
        this.family = "Percussion";
        this.play_verb = "hits";
        this.loudness = loudness;
    }
}

//string class
class String extends Instrument {
    constructor(loudness) {
        super();
        this.family = "String";
        this.play_verb = "plucks";
        this.loudness = loudness;
    }
}

//array to test code
let instruments = [];
instruments[0] = new Woodwind(60);
instruments[1] = new Percussion(110);
instruments[2] = new String(70);

//loop through array
instruments.forEach(
    function (instrument) {
        instrument.playing();
    }
)