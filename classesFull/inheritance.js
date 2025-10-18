class Car {
  constructor (brand) {
    this.carName = brand
  }
  have () {
    return "I have a "  + this.carName
  }
}
// const myCar = new Car("Audi");
// console.log(myCar.have ());

class Model extends Car {
    constructor (brand, speed) {
        super (brand);
       this.power = speed ;
    }
    finally () {
        return this.have () + `,  ${this.carName} is so powerfull ` + `speed is ${this.power} KMH`

    }
}
const myCar = new Model ( "Audi", 320);
console.log(myCar.finally());
// Note : extend mane hoilo onno classes er value copy kora 
// Note : "super" er value hoilo  extends kora  class er  value 
// Note : ai system take inheritence bole 

class Bus {
  constructor (compnay) {
  this.busName = compnay;
  }
  get _bus () {
    return this.busName;
  }
  set _bus (a ) {
    return this.busName = a ;
  }
}

let myBus = new Bus("Hanif");
console.log(myBus._bus)
console.log(myBus._bus = "Ena");

// Note : get like a object property and set like as property = value 
// Note : set value nai ar get value dai 
// Note : Classed kokhono Hoisting hoi nh 


class Bike {
  constructor (name, speed) {
   this._bikeName = name ;
   this.speed = speed;
  }
  get bikeName  () {
    return  this._bikeName + " Speed is  " + this.speed;
  }
  set bikeName (info) {
    const { hunddarName , hundddarSpeed} = info;
   if ( hundddarSpeed > 180 ) {
    console.log( `${hunddarName} Over speed ! limiting in 180`);
    this.speed = 180
    this._bikeName = hunddarName;
   }
   else {
    this.speed = hundddarSpeed ;
    this._bikeName = hunddarName ;
   }
  }
}

let myBike = new Bike("Suzuki Gixxer ", 180 );
console.log(myBike.bikeName);
myBike.bikeName = { hunddarName : " Yamaha", hundddarSpeed : 220};
console.log(myBike.bikeName)

