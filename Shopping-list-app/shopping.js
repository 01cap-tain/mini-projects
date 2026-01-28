const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearBtn = document.querySelector("#clear");
const filter = document.querySelector("#filter");
function toAddAndSubmit(e) {
  e.preventDefault();
  // create new Item
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("pls enter the field");
    return;
  }
  addItem(newItem);
  addItemtoStorage(newItem);
  updateUi();
  itemInput.value = "";
}

function addItem(item) {
  const li = document.createElement("li");
  let text = document.createTextNode(item);
  li.appendChild(text);

  const btn = createBtn("remove-item btn-link text-red");
  li.appendChild(btn);
  itemList.appendChild(li);
}

function addItemtoStorage(item) {
  let itemStorage;
  if (localStorage.getItem("items") === null) {
    itemStorage = [];
  } else {
    itemStorage = JSON.parse(localStorage.getItem("items"));
  }
  itemStorage.push(item);

  localStorage.setItem("items", JSON.stringify(itemStorage));
  //   console.log(...localStorage);
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
  updateUi();
}
function updateUi() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    clearBtn.style.display = "none";
    filter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    filter.style.display = "block";
  }
}
function filterList(e) {
  const newValue = document.querySelector("#filter").value;
  const items = document.querySelectorAll("li");
  if (items !== 0) {
    // items.filter((item) => console.log(item));
    items.forEach((item) => {
      console.log(item);
      const text = e.target.value.trim().toLowerCase();
      const itemName = item.firstChild.textContent.toLowerCase();
      if (itemName.indexOf(text) !== -1) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }
}

itemForm.addEventListener("submit", toAddAndSubmit);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
filter.addEventListener("input", filterList);
updateUi();
