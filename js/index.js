// get user name from session storage
var welcomeMsg = document.querySelector(".message");
var logOutBtn = document.querySelector("#logout");
var bodyHtml = document.getElementsByTagName("body")[0];

var loggedUser = JSON.parse(sessionStorage.getItem("loggedUser")) || null;

if (loggedUser != null) {
  welcomeMsg.textContent = `Hello ${loggedUser.name}`;

  logOutBtn.addEventListener("click", function () {
    sessionStorage.removeItem("loggedUser");
    window.location.href = "/Smart-login/index.html";
  });
} else {
  if (window.location.pathname == "/Smart-login/pages/home.html") {
    bodyHtml.classList.add("d-none");
    window.location.href = "/Smart-login/pages/404.html";
  }
}
