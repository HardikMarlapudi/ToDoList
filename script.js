let inputText = document.getElementById("inputText");
let createData = document.getElementById("createData");
let saveData = document.getElementById("saveData");

function create() {
    const inputText = input.value.text();

    if(inputItems === "") {
        window.alert("Please enter a task");
    } else {
        let listItem = document.createElement("li");
        listItem.textContent = inputItems;
        saveData.appendChild(listItem);
        inputText.value = "";
        }
        createData.onclick = create;
    }
