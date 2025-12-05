const display = document.getElementById('display');

// function getData () {
//     fetch("http://127.0.0.1:5500/API/fetch/note.txt").then(function (result) { return result.text()}).then(function (data) {
//         display.innerHTML= data;
//         console.log('hello world');
        
//     })
//     console.log('hello world 2');
// }

async function getData () {
    const resut = await fetch("http://127.0.0.1:5500/API/fetch/note.txt");
    const data = await resut.text();
    display.innerHTML = data
    console.log('hello world 2');
}
