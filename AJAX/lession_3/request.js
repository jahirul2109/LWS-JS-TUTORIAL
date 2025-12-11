
function loadData (call) {
    const xhr = new XMLHttpRequest() ;
    xhr.onload = function () {
    console.log ("Responsive reply")
    console.log(this.getAllResponseHeaders());
    console.log(this.getResponseHeader('date'));
    
     call(this)
    }
    xhr.open("GET", "/AJAX/lession_1/demo/lorem.txt?=s" + Math.random().toPrecision(4), true);

    xhr.send()
    console.log ("Hello World")

}

function callback (x) {
  const container = document.getElementById("demo");
  container.innerHTML = x.responseText;
}

// Note : If i defiend open method 3 perameter asyc is ture then "hello World " is coming frist 
// Note : If i defiend open method 3 perameter asyc is false then "Responsive Reply" is coming frist 