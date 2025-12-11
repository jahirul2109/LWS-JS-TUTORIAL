// When value is object then use for-in loop 



let newObj = { Name:"jahirul", Roll: 2109, Class:"XII", Merit:"fail"}
for (let a in newObj) {
    console.log(`${a}: ${newObj[a]}`);
    // console.log(a);
    
    
}

// we should use For in loop in object not array 