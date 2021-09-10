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
    constructor(loudness, family, play_verb) {
        super(); //takes 3 arguments //encapsulate the 2
        this.family = "Woodwind";
        this.play_verb = "blows";
        this.loudness = loudness;
    }


}
let flute = new Woodwind(6);
console.log(flute);

class trout extends fish {
    constructor(habitat, length, variety) {
      super()
      this.habitat = habitat
      this.length = length
      this.variety = variety
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