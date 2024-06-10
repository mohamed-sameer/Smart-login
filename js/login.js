var loginBtn = document.querySelector("#loginBtn");
var signUpBtn = document.querySelector("#signUpBtn");
var userLoginEmail = document.querySelector("#emailInput");
var userLoginPasswd = document.querySelector("#passInput");
var warnMsg = document.querySelector("#warnMsg");
var usersList = JSON.parse(localStorage.getItem("SmartLoginUsersList")) || null;

function isLoginFormEmpty() {
  return !userLoginEmail.value && !userLoginPasswd.value;
}

loginBtn.addEventListener("click", function () {
  var isFormEmpty = isLoginFormEmpty();
  if (isFormEmpty) {
    warnMsg.classList.toggle("d-none");
    warnMsg.textContent = "All inputs are required";
  } else {
    warnMsg.classList.toggle("d-none");
    if (usersList !== null) {
      for (var i = 0; i < usersList.length; i++) {
        if (
          usersList[i].email.toLowerCase() ===
            userLoginEmail.value.toLowerCase() &&
          usersList[i].password === userLoginPasswd.value
        ) {
          window.location.href = "/Smart-login/pages/home.html";
          sessionStorage.setItem(
            "loggedUser",
            JSON.stringify({
              email: usersList[i].email,
              name: usersList[i].name,
            })
          );
        }
      }
    } else {
      warnMsg.textContent = "no user found with this email";
      warnMsg.classList.toggle("d-none");
    }
  }
});
