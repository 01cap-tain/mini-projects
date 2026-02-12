const jokeBtn = document.querySelector("#btn");
const jokeContainer = document.querySelector("#joke-container");

// console.log(jokeBtn, jokeContainer);

function generateJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    // console.log("clicked");
    if (this.readyState === 4 && this.status === 200) {
      // const holder = document.createElement()
      jokeContainer.textContent = JSON.parse(this.responseText).value;
    } else {
      jokeContainer.textContent = `Something went wrong`;
    }
  };
  xhr.send();
}
jokeBtn.addEventListener("click", generateJoke);
window.addEventListener("DOMContentLoaded", generateJoke);
