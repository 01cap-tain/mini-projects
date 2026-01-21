const RecipeList = document.querySelector("#recipe-list");
let RecipePackage = document.querySelector("#recipe-package");
const input = document.querySelector("#filter-field");

function handleRecipeList() {
  const Receipes = [
    {
      image: "",
      name: "Cajun-sausage",
      price: 20,
      // id: 1,
      ingredient: [
        "Smoked sausage",
        "Rice",
        "Bell Peppers",
        "Onions",
        "Garlic",
        "Cajun Seasoning",
        "Chicken Broth",
        "Olive Oil",
        "Add-ins",
      ],
    },
    {
      image: "Kenny",
      name: "Taco",
      price: 50,
      // id: 2,
      ingredient: [
        "Smoked sausage",
        "Rice",
        "Bell Peppers",
        "Onions",
        "Garlic",
        "Cajun Seasoning",
        "Chicken Broth",
        "Olive Oil",
        "Add-ins",
      ],
    },
    {
      image: "",
      name: "Cajun-sausage",
      price: 50,
      // id: 3,
      ingredient: [
        "Smoked sausage",
        "Rice",
        "Bell Peppers",
        "Onions",
        "Garlic",
        "Cajun Seasoning",
        "Chicken Broth",
        "Olive Oil",
        "Add-ins",
      ],
    },
    {
      image: "",
      name: "Cajun-sausage",
      price: 50,
      // id: 4,
      ingredient: [
        "Smoked sausage",
        "Rice",
        "Bell Peppers",
        "Onions",
        "Garlic",
        "Cajun Seasoning",
        "Chicken Broth",
        "Olive Oil",
        "Add-ins",
      ],
    },
    {
      image: "",
      name: "Cajun-sausage",
      price: 70,
      // id: 5,
      ingredient: [
        "Smoked sausage",
        "Rice",
        "Bell Peppers",
        "Onions",
        "Garlic",
        "Cajun Seasoning",
        "Chicken Broth",
        "Olive Oil",
        "Add-ins",
      ],
    },
  ];

  let result = Receipes.map((recipe) => {
    return `
          <div id="item" class="recipe-container">
                      <div class="recipe-img">
                          <span>${recipe.name}</span>
                      </div>
                      <h3>price:<span>$${recipe.price}</span></h3>
                      <p>${recipe.ingredient.slice(0, 5)}....</p>
                  </div>
         `;
  });
  RecipePackage.innerHTML = result.join(" ");
  // let filterResult;
  input.addEventListener("input", () => {
    if (
      input.value.trim().toLowerCase() === "" ||
      !input.value.trim().toLowerCase()
    ) {
      return (RecipePackage.innerHTML = result.join(" "));
    } else {
      filterResult = Receipes.filter(
        (recipe) =>
          // const searchItem = input.value.trim().toLowerCase();
          recipe.name.toLocaleLowerCase() === input.value.trim().toLowerCase(),
      ).map((recipe) => {
        return `<div id="item" class="recipe-container">
                      <div class="recipe-img">
                          <span>${recipe.name}</span>
                      </div>
                      <h3>price:<span>$${recipe.price}</span></h3>
                      <p>${recipe.ingredient.slice(0, 5)}....</p>
                  </div>`;
      });
    }

    RecipePackage.innerHTML = filterResult.join(" ");

    console.log(filterResult);
  });
  // result.addEventListener("click", (e) => {
  //   if (e.target) {
  //     openModal;
  //   }
  // item});
  const items = RecipePackage.querySelectorAll("#item");
  items.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const selectedRecipe = Receipes[index];
      // selectedRecipe.();
      const modal = document.querySelector(".modal");
      console.log(modal);
      if (modal) {
        modal.remove();
      }
      openModal(selectedRecipe);
    });
  });
}

window.addEventListener("DOMContentLoaded", handleRecipeList);

function openModal(recipe) {
  const modal = document.createElement("div");
  modal.className = "modal"; // Style this in CSS to be fixed/centered

  modal.innerHTML = `
        <div class="modal-content" id="${recipe.id}">
            <span class="close-btn">&times;</span>
            <img src="./assests/Cajun-sausage.png" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <h3>Price:<span>$${recipe.price}</span></h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredient}</p>
            <input id="checkbox" type="checkbox">
            <button class="purchase">Purchase Now</button>
        </div>
    `;
  document.body.appendChild(modal);
  document.getElementById("recipe-list").style.opacity = "0.5";

  // Close functionality
  // Inside your openModal function
  const purchaseBtn = modal.querySelector(".purchase");
  const confirmCheck = modal.querySelector("#checkbox");
  console.log(confirmCheck);
  console.log(confirmCheck.checked);

  confirmCheck.addEventListener("change", () => {
    purchaseBtn.disabled = !confirmCheck.checked;
  });
  modal.querySelector(".close-btn").addEventListener("click", () => {
    modal.remove();
    document.getElementById("recipe-list").style.opacity = "1";
  });
}
