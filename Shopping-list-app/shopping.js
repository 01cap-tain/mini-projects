const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

function addItem(e) {
  e.preventDefault();
  // create new Item
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("pls enter the field");
    return;
  }
  const li = document.createElement("li");
  let text = document.createTextNode(newItem);
  li.appendChild(text);

  const btn = createBtn("remove-item btn-link text-red");
  li.appendChild(btn);
  itemList.appendChild(li);
  itemInput.value = "";
}

itemForm.addEventListener("submit", addItem);

function createBtn(classes) {
  const btn = document.createElement("button");
  btn.className = classes;
  // btn innerHtml (icon)
  const icon = createIcon("fa-solid fa-xmark");
  btn.appendChild(icon);
  return btn;
}
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}
