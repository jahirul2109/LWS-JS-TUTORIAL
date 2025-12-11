function loadData (myFunction) {
    const xhr = new XMLHttpRequest () ;
    xhr.onload = function () {
    myFunction(this)
    console.log(xhr.getResponseHeader("Date"));
    console.log(xhr.getResponseHeader("Etag"));
    }
    xhr.open ("GET", "/AJAX/lession_1/demo/lorem.txt")
    xhr.setRequestHeader("GF_1", "LJSHDFKAK");
    xhr.setRequestHeader("Name", "Mohammad Jahirul Islam")
    
    xhr.send()
    // xhr.abort()
}

function myCallback (xhr) {
    const container = document.getElementById("demo");
    container.innerHTML= xhr.responseText;
}
function myCallback2 (xhr) {
    const container = document.getElementById("demo2");
    container.innerHTML= xhr.responseText;
}