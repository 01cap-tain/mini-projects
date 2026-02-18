function fetchUser() {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => addUser(data.results[0]));
}

function addUser(user) {
  //   user.preventDefault();
  if (user.gender === "female") {
    document.querySelector(".user-generator").style.backgroundColor = "purple";
  } else {
    document.querySelector(".user-generator").style.backgroundColor = "#333";
  }
  const card = document.querySelector("#card");
  card.innerHTML = `
    <img src="${user.picture.large}" alt="">
            <div>
                <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Gender:</strong> ${user.gender}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Location</strong> ${user.location.country}</p>
                <p><strong>Age:</strong> ${user.dob.age}</p>
            </div>
    `;
}
fetchUser();
document.querySelector("#btn").addEventListener("click", fetchUser);
setInterval(fetchUser, 3000);
