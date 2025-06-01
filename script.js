const inputText = document.getElementById("inputText");
const createData = document.getElementById("createData");
const listItems = document.getElementById("listItems");
const saveData = document.getElementById("saveData");
const deleteData = document.getElementById("deleteData");

function create() {
    if(inputText == "") {
        window.alert("Please enter a task");
    }
    else if(inputText != "") {
        let listItems = document.createElement("li");
        listItems.innerHTML = inputText;
        saveData.appendChild(listItems);
        let span = `${inputText}`
        span.innerHTML = `${inputText}`;
    }
}
