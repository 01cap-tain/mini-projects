const RecipeList = document.querySelector("#recipe-list");
let RecipePackage = document.querySelector("#recipe-package");
const input = document.querySelector("#filter-field");

function handleRecipeList() {
  const Receipes = [
    {
      image: "",
      name: "Cajun-sausage",
      price: 20,
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
    // if (filterResult) {
    //   RecipePackage.innerHTML = filterResult.join(" ");
    // }
    console.log(filterResult);
  });

  const modal = document.createElement("div");
  modal.className = "modal";
  Receipes.forEach((recipe) => {
    if (recipe) {
      document.querySelector("#item").addEventListener("click", () => {
        modal.innerHTML = `<div>
     <img class="" src="./assests/Cajun-sausage.png" alt="theme-Icon">
     <h3>price:<span>$${recipe.price}</span></h3>
    <p>${recipe.ingredient}</p>
    <input id="modal-checkbox" type="checkbox">
    <button>Purchase</button>
   </div>`;
        RecipeList.style.opacity = "0.5";
        console.log(modal.innerHTML);
      });
    }
  });
}

window.addEventListener("DOMContentLoaded", handleRecipeList);
