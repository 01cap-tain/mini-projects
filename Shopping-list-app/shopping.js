const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearBtn = document.querySelector("#clear");
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
function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems() {
  //   itemList.innerHTML = "";
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
