const h1Element = document.querySelector("#h1");
h1Element.addEventListener('mouseleave', (event)=> {
//  console.log(event);
 
})

// const inputElement = document.querySelector('input[type ="text"]');
// inputElement.addEventListener('copy', (event)=> {
    // console.log(event);
    
// })
const fromElement = document.querySelector("form");
fromElement.addEventListener('submit', (event)=> {
    event.preventDefault();
    console.log(event.target);
    
})
const inputElement2 = document.querySelector("input[type='text'] ");
inputElement2.addEventListener('keydown', (event)=> {
    console.log(event.target.value);
    
})
