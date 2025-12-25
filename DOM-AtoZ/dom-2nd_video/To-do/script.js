// Seclection element 
let  form = document.querySelector("#input");
let newTask = document.querySelector('#taskN')
let itemsUL = document.querySelector('#iteams');
let compeleteUL = document.querySelector('#iteams2')
let li = document.querySelector('.iteam')

// Make function 
let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox= document.createElement('input');
    let lable = document.createElement('label');
    lable.innerText = task;
    checkBox.type = "checkbox";
    if (lable.innerText.trim() !=="") {
    listItem.appendChild (checkBox);
    listItem.appendChild (lable);
    return listItem;
    } else {
        alert ("Not a valid Task")
    }
}
let addnewTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    itemsUL.appendChild(listItem);
    newTask.value ="";
    // incompelete task 
    bindinCompelete(listItem, compeleteTask)

}
let compeleteTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement ("input");
    listItem.className = "iteam"
    deleteBtn.type = "submit";
    deleteBtn.value = "Delete";
    deleteBtn.className = "Dbtn"
    listItem.appendChild(deleteBtn);
    let checkBox = listItem.querySelector('input[type = "checkbox"]');
    checkBox.remove();
    compeleteUL.appendChild(listItem);
    bindCompelete (listItem, deletButton)

}
let deletButton = function () {
    let listItem = this.parentNode;
    let UL = listItem.parentNode;
    UL.removeChild(listItem);
    if (UL.children.length <= 0 ) {
        UL.remove(compeleteUL)
    }
}


let bindinCompelete = function (task , clickCheckBox) {
    let checkBox = task.querySelector('input[type = "checkbox"]')
    checkBox.onchange = clickCheckBox;
}

let bindCompelete = function (task , deletBtn) {
    let checkBox = task.querySelector('input[type = "submit"]')
    checkBox.onclick = deletBtn;
}
form.addEventListener ("submit", addnewTask)

for (let i =0; i < itemsUL.children.length; i++) {
    bindinCompelete (itemsUL.children[i],compeleteTask)
}
for (let i =0; i < compeleteUL.children.length; i++) {
    bindCompelete (compeleteUL.children[i],deletButton)
}