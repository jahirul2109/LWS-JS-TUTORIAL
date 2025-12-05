const inputObj = document.getElementById ("id1");
let demo = document.getElementById ("demo");

// function myFunction () {
//  if (!inputObj.checkValidity ()) {
//   demo.innerHTML = inputObj.validationMessage;
//  }
// }
function myFunction () {
    if (inputObj.validity.rangeOverflow) {
       inputObj.setCustomValidity("You have made a Range Overflow Error");
    } else if (inputObj.validity.rangeUnderflow) {
       inputObj.setCustomValidity("You have made Range Underflow error");
    } else if (inputObj.validity.valueMissing){
       inputObj.setCustomValidity("Value Missing");
    } else if (inputObj.setCustomValidity.typeMismatch) {
        inputObj.setCustomValidity("Type Mismatch error")
    }

    if (!inputObj.checkValidity()) {
      demo.innerHTML = inputObj.validationMessage;
    //    inputObj.validationMessage;

    }
}