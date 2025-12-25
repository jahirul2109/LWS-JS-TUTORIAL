const jahirul = document.querySelector("#jahirul");
const animation = document.querySelector("#animation");
let pos = 0;

function animationMove () {
   const interval = setInterval (moveKor, 1);
function moveKor () {
    if (pos < 450 ) {
        pos ++
        animation.style.top = pos + "px"
        animation.style.left = pos + "px"
    } else {
      clearInterval (interval)
    }
}
return moveKor;
}