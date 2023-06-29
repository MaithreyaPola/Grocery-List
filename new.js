const form = document.querySelector('form');
const product = document.querySelector("#product");
const quantity = document.querySelector("#qty");
const table = document.querySelector("table");

//Event Listnerer for the Form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const prdval = product.value;
    const qtyval = quantity.value;

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    cell1.setAttribute("contenteditable", "false");
    cell2.setAttribute("contenteditable", "false");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const newtr = document.createElement("tr");
    cell1.style.padding = "14px 10px 14px 10px";
    cell2.style.padding = "14px 10px 14px 10px";
    // cell3.style.padding = "14px 10px 14px 10px";
    // cell4.style.padding = "14px 10px 14px 10px";
    newtr.style = "text-align: center";
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");

    btn1.innerText = "Edit";
    btn2.innerText = "Delete";
    btn2.classList.add("deleteBtn", "button", "is-danger", "is-light");
    btn1.classList.add("editableBtn", "button", "is-warning", "is-light");
    // btn2.setAttribute("class", "deleteBtn");
    // btn1.setAttribute("class", "editableBtn");


    cell1.innerText = prdval;
    cell2.innerText = qtyval;
    cell3.appendChild(btn1);
    cell4.appendChild(btn2);

    if (cell1.innerText.length > 0 && cell2.innerText.length > 0) {
        newtr.appendChild(cell1);
        newtr.appendChild(cell2);
        newtr.appendChild(cell3);
        newtr.appendChild(cell4);
        table.appendChild(newtr);
        form.reset();
    } else {
        alert("Please fill all fields");
    }
});


table.addEventListener("click", (e) => {
    const rowItem = e.target.parentNode.parentNode;
    if (e.target.className.includes("deleteBtn")) {
        rowItem.remove();
    }
    // if (e.target.className.includes("editableBtn")) {
    if (e.target.innerText === "Edit") {
        e.target.innerText = "Save";
        e.target.classList.remove("editableBtn", "button", "is-warning", "is-light");
        e.target.classList.add("saveBtn", "button", "is-success", "is-light");
        rowItem.children[0].contentEditable = "true";
        rowItem.children[1].contentEditable = "true";
    } else if (e.target.className.includes("saveBtn")) {
        e.target.innerText = "Edit";
        e.target.classList.remove("saveBtn", "button", "is-success", "is-light");
        e.target.classList.add("editableBtn", "button", "is-warning", "is-light");
        rowItem.children[0].contentEditable = "false";
        rowItem.children[1].contentEditable = "false";
    }

    //}
});



