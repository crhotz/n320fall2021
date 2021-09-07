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
        console.log(this.family + this.play_verb + "at" + this.loudness);
    }
}


//concrete classes

//woodwind class
class Woodwind extends Instrument {
    constructor() {
        super();
    }


}

//percussion class
class Percussion extends Instrument {
    constructor() {
        super();
    }

    
}

//string class
class String extends Instrument {
    constructor() {
        super();
    }

    
}