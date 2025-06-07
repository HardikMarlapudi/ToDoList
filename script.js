let inputText = document.getElementById("inputText");
let createData = document.getElementById("createData");
let removeData = document.getElementById("removeData");
let saveData = document.getElementById("saveData");

function create() {
    const inputItems = inputText.value.trim();

    if(inputItems === "") {
        window.alert("Please enter a task, you would like to add");
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
        window.alert("You have already completed this task");
    }
}

function remove() {
    const inputItems = inputText.value.trim();

    if (inputItems === "") {
        window.alert("Please enter a task, you would like to remove");
    } else {
        let listItem = document.createElement("li");
        listItem.textContent = inputItems;
        saveData.remove(listItem);
        inputText.value = "";
    }
    removeData.onclick = remove;
}
