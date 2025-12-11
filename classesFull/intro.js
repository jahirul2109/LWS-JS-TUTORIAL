class myCar {
    constructor (n , m ) {
        this.name = n ;
        this.modelName = m ;
    }
    test () {
        return this.name + " " + this.modelName + " Is rouning in 120 KMH ";
    }
}

const bmw = new myCar ("BMW", 2017)
console.log(bmw.test())

