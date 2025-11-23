const href = document.querySelector(".href")
const hostname = document.querySelector('.hostname')
const pathname = document.querySelector(".pathname")
const protocol = document.querySelector ('.protocol')
const port = document.querySelector ('.port')
function loaded () {
    window.location.assign('https://jahirul2109.github.io/DOM-PROJECT/')
}

href.innerHTML = 'href location is :' + location.href;
hostname.innerHTML = "Host name is :" + location.hostname;
pathname.innerHTML = "Path Name :"  + location.pathname;
protocol.innerHTML = "protocol is:" + location.protocol;
port.innerHTML = "Port is :" + location.port;