let inputText = document.getElementById("inputText");
let createData = document.getElementById("createData");
let saveData = document.getElementById("saveData");

function create() {
    const inputItems = inputText.value.trim();

    if(inputItems === "") {
        window.alert("Please enter a task");
    } else {
        let listItem = document.createElement("li");
        listItem.textContent = inputItems;
        saveData.appendChild(listItem);
        inputText.value = "";
        }
        createData.onclick = create;
    try {
    inputText.value === inputItems;
    } catch (error) {
        window.alert("You hava already completed this task");
    }
}
