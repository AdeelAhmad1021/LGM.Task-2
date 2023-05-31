var getUsersButton = document.getElementById("getUsersButton");
var gridContainer = document.getElementById("gridContainer");
var loader = document.getElementById("loader");

getUsersButton.addEventListener("click", function() {
    showLoader();
    getUsers();
});

function showLoader() {
    loader.style.display = "block";
}

function hideLoader() {
    loader.style.display = "none";
}

function getUsers() {
    fetch("https://reqres.in/api/users?page=1")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            hideLoader();
            renderUsers(data.data);
        })
        .catch(function(error) {
            hideLoader();
            console.log("Error:", error);
        });
}

function renderUsers(users) {
    gridContainer.innerHTML = "";
    users.forEach(function(user) {
        var userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <img src="${user.avatar}" alt="User Avatar" width="80" height="80">
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>Email: ${user.email}</p>
        `;
        gridContainer.appendChild(userCard);
    });
}
