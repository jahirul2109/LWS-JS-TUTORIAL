const height = document.querySelector(".height")
const width = document.querySelector('.width')
const avHeght = document.querySelector('.avHeight')
const avWidth = document.querySelector('.avWidth')

height.innerHTML= "Height is :" + window.screen.height;
width.innerHTML = "Width is :" + window.screen.width;
// avHeght.innerHTML = "Available Height is :" + window.screen.pixelDepth;
// avWidth.innerHTML = "Available Width is :" + window.screen.colorDepth;
avHeght.innerHTML = "Available Height is :" + window.screen.availHeight;
avWidth.innerHTML = "Available Width is :" + window.screen.availWidth;
