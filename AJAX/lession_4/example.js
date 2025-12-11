function sendRequest (method, url, data) {
    const promise = new Promise (function(resolve, reject ) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status >= 400 ) {
            reject (`This is an Applecatino Error Status is ${xhr.status}`)
        } else{
   resolve(JSON.parse(this.responseText))
        }

        
    }
    xhr.onerror = function () {
        reject ("This is an Error")
    }
    xhr.open(method, url)
    xhr.send(data);
    });
    return promise;

}
function getData () {
 sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1?=j" + Math.random().toPrecision(3)).then(function(x) {
    console.log(x);
    
 }) .catch((error)=>{
    console.log(error);
    
 })
}
function sendData () {
  sendRequest("POST","https://jsonplaceholder.typicode.com/posts", JSON.stringify({
    name : "jahirul",
    age : 20,
    class : 12 + "th"
  })).then(function (x) {
    console.log(x);
    
  }).catch ((error)=> {
    console.log(error);
    
  })
}

const getBtn = document.getElementById("get").addEventListener("click", getData)
const sendBtn = document.getElementById("send").addEventListener("click", sendData)