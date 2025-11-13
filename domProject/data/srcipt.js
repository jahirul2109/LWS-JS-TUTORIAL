const milstoneData = JSON.parse (data).data;
function loadMilstone () {
    const milstone = document.querySelector ('.milstones');
milstone.innerHTML = `${milstoneData.map(function (milestone) {
return `<div class="milstone border-b" id='${milestone._id}'>
            <div class="flex">
             <div class="inpu">
                <input type="checkbox" class ="cBox" onclick = "markCbox(this, ${milestone._id})">
             </div>
             <div onclick ="milestoneOpen (this, ${milestone._id } )">
                <p class="mileName"> ${milestone.name} <i class="fa-solid fa-angle-down"></i></p>
             </div>
             </div>
             <div class="hiden_panel">
                ${milestone.modules.map(function (module){
                    return `<div class="module border-b">
                    <p>${module.name} </p>
                </div>`
                }).join('')}
             </div>
            </div>`
}).join('')}`
}
function milestoneOpen (milstoneopen, id) {
const currentElement = milstoneopen.parentNode.nextElementSibling;
const allShow = document.querySelector('.show');
const active = document.querySelector('.active');

if (!milstoneopen.classList.contains('active') && active) {
   active.classList.remove("active")}
 milstoneopen.classList.toggle('active')

if(!currentElement.classList.contains('show') && allShow)
   allShow.classList.remove('show');

 currentElement.classList.toggle("show")
 showMilestone (id) 
}
function showMilestone (id) {
  const mileStoneImg = document.querySelector('.milestoneImg');
  const name = document.querySelector('.titile') 
  const description = document.querySelector('.dctp')

  mileStoneImg.style.opacity = "0";
  const newSrc = milstoneData [id].image; 
  mileStoneImg.onload = () => {
     mileStoneImg.style.opacity = '1';
  }
  mileStoneImg.src = newSrc
  name.innerHTML = milstoneData [id].name;
  description.innerHTML = milstoneData [id].description
}
  
 function markCbox (cBox, id) {
   const doneList = document.querySelector('.doneList');
   const milstones = document.querySelector('.milstones');
   const item = document.getElementById(id)
   if (cBox.checked){
      milstones.removeChild(item);
      doneList.appendChild(item)
      const newArr = Array.from (doneList.children);
      newArr.sort ( (a, b ) => {
         return a.id - b.id ;
      })
      newArr.forEach (al => doneList.appendChild (al))
   } else {
      doneList.removeChild(item);
      milstones.appendChild(item)
   }
   const items = Array.from (milstones.children);
   items.sort( (a, b ) => {
      return a.id - b.id;
   } );
   items.forEach(el => milstones.appendChild (el))
 }

loadMilstone () ;
const h = window.innerHeight;
const w = window.innerWidth;
