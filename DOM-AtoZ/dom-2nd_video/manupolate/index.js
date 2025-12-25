
                   // DOM traversal
// // console.dir(document.body);
// let elemet;
// document.title = "Play With DOM";
// let cBoxParent = document.querySelectorAll(".iteam:last-child");
// // cBoxParent.style.color = "red"
// console.log(cBoxParent);
// for ( elemet of cBoxParent) {
//   elemet.style.color = "red"
// }
// // const cBox = cBoxParent.querySelectorAll(".cBox");               
// // console.log(cBox[2]);
// // for (let i = 0; i<cBox.length; i++) {
// //     cBox[i].style.color = "red"
// //     console.log(cBox[i]);
    
// // }

//                How to find Children
// const grandParent = document.querySelector("#right")
// const parent = grandParent.children;
// const children = parent[1].children; // Output : Html Colection 
// const children = grandParent.querySelectorAll(".iteam"); // Output : Nodelist 
// console.log(children);


//                  How to find Parent
// const baccha = document.querySelector(".iteam"); 
// const parent = baccha.parentElement;
// // const grandParent = parent.parentElement
// const grandParent = baccha.closest("#right")
// console.log(parent);
// console.log(grandParent);


//                   How to find next siblings
// const childrenOne = document.querySelector(".iteam");
// const childrenTwo = childrenOne.nextElementSibling;
// childrenTwo.style.color = "green";
// console.log(childrenTwo);

// How to find Previes Siblings
// const childrenTwo = document.querySelector(".iteam").nextElementSibling;
// const childernOne = childrenTwo.previousElementSibling;
// childernOne.style.color = "red";
// console.log(childernOne);


//              Create new Element and attrivute 
// const divElement = document.createElement("div")
// divElement.className = "newDiv";
// divElement.setAttribute("id", "newDiv");
// divElement.setAttribute("tittle", "Red div");

// const container = document.querySelector("#fotter")
// const right = container.querySelector("#right");
// container.insertBefore(divElement, right) // (kakae isert korbo , ar kar ahge inset korbo)



//               Append Child, apnned 
// let a =container.appendChild(divElement); // Onlye html element gorohon kore and ta return kore 
// let b =container.append(divElement) // jekono doroner text gorohon kore and return dai "Undefined"
// console.log(a); // Output : <div class="newDiv" id="newDiv" tittle="Red div"></div>
// console.log(b) // Output : "Undefined"


