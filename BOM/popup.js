const showConform = document.getElementById("conform");
const ShowPromt = document.getElementById("promt");
// Single Popup as like as warning
function showAlert() {
   window.alert("Hello Word");
}
// Ask you whats your desition "Yes" / "No" 
function sConform () {
   if  (confirm("Exit this page?")){
    showConform.innerHTML = "Exit to page"
   } else {
    showConform.innerHTML = "Stay on Page";
   }
}
// Like as a input
function showPromt() {
   const popUp = prompt("Enter Your Name :", "Md Jahirul Islam");
   let text ;
   if (popUp === null || popUp ==="") {
    text = "Canceled the Prompt"
   } else {
    text = "Hello " + popUp + "Tumi ki pagol" ;
   }
   ShowPromt.innerHTML = text;
}