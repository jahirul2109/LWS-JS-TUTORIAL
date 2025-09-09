const dailyRotuing = {
    weakeUp: "7:AM",
    brush: "8:AM",
    breakFast:"9:AM"
}
dailyRotuing.outGoingTime = "2 PM";
delete dailyRotuing.outGoingTime; // delete outGoingTime Properties

let a = "weakeUp";

// console.log(dailyRotuing[a]);
// console.log(dailyRotuing.a);
// console.log(dailyRotuing.weakeUp);

//  how to work for in loop  in object
let timeBox = '';
for (x in dailyRotuing){
    console.log(x); // Output : All properties 
    console.log(dailyRotuing[x]); // Output All valus
    
    timeBox += dailyRotuing[x];
    // timeBox += x;
}
console.log(timeBox); // output 7:AM8:AM9:AM

