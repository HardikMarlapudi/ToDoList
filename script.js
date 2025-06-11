let inputText = document.getElementById("inputText");
let createData = document.getElementById("createData");
let editData = document.getElementById("fa-pen-to-square");
let removeData = document.getElementById("fa-trash");

function create() {
    let newElement = document.createElement("li");
    let text = document.createTextNode(inputText.value);
    newElement.appendChild(text);
    saveData.appendChild(newElement);
    inputText.value = "";
}

function edit() {
    if (document.getElementById("createData").innerHTML === "") {
        editData.disabled = true;
    } else {
        let editElement = saveData.lastElementChild;
        let text = prompt("Enter new text");
        editElement.textContent = text;
    }
}

function remove() {
    if (document.getElementById("inputText") === "") {
        deleteData.disabled = true;
    } else {
    saveData.removeChild(saveData.lastElementChild);
    inputText.value = "";
    }
}
