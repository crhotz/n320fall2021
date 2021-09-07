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