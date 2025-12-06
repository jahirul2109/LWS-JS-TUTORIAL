function loadAjax() {
    // Creat a request 
    const xhr = new XMLHttpRequest() ;
    
    // Response paile ja korbo
    xhr.onload = function () {
        const container = document.getElementById ("demo");
        container.innerHTML = xhr.responseText;
    }

    // prepare request - method : GET, POST , PUT , PATCH , DELETE , OPTIONS;

    xhr.open("GET", "./demo/lorem.txt");

    // Send Request 
    xhr.send()

}