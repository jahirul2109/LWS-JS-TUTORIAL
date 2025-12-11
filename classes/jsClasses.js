class Candidate {
    constructor(Fname, duty) {
        this.Fname = Fname;
        this.duty = duty;
    }
    play () {
        console.log(`${this.Fname} work start at ${this.duty}`);
        
    }
}
const salesManName = new Candidate ("Jairul", 9);
const salesManName1 = new Candidate ("Yasin", 10 );
salesManName1.play();
salesManName.play();