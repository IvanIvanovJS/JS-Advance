

function addItem() {
    let inputRef = document.getElementById("newItemText");
    //text.textContent = inputRef.value
    let inputValueRef = document.getElementById("newItemValue");
    //text.value = inputValueRef.value;
    //result.appendChild(text);
    let resultRef = document.getElementById("menu");
    let createOption = document.createElement("option");
    createOption.textContent = inputRef.value;
    createOption.value = inputValueRef.value;

    resultRef.appendChild(createOption);
    inputRef.value = "";
    inputValueRef.value = "";

}