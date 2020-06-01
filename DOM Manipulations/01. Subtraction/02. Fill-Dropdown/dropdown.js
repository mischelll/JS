function addItem() {
    let text = document.getElementById("newItemText").value;
    let value = document.getElementById("newItemValue").value;
    let dropDownMenu = document.querySelector("#menu");

    let option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    dropDownMenu.appendChild(option);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";

}