var userNameInput = document.querySelector("#nameInput");
var userEmailInput = document.querySelector("#emailInput");
var userPasswdInput = document.querySelector("#passInput");
var signUpBtn = document.querySelector("#signUpBtn");
var warnMsg = document.querySelector("#warnMsg");
var emailRegex = /^([a-zA-Z0-9_.]{2,})@([a-zA-Z0-9-]{2,}\.[a-z]{2,})$/;
var nameNPassRegex = /^[a-zA-Z0-9_. ]{3,}$/;

var usersList = JSON.parse(localStorage.getItem("SmartLoginUsersList")) || [];

function isSignUpFormEmpty() {
  return !userNameInput.value && !userEmailInput.value && !userPasswdInput.value
    ? false
    : true;
}

signUpBtn.addEventListener("click", function () {
  var isFormEmpty = isSignUpFormEmpty();
  if (!isFormEmpty) {
    warnMsg.classList.replace("d-none", "d-block");
  } else {
    if (
      emailRegex.test(userEmailInput.value) &&
      nameNPassRegex.test(userNameInput.value) &&
      nameNPassRegex.test(userPasswdInput.value)
    ) {
      var registerUser = {
        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPasswdInput.value,
      };

      if (usersList.length !== 0) {
        for (var i = 0; i < usersList.length; i++) {
          if (usersList[i].email === registerUser.email) {
            console.log("email is the same use another email");
          } else {
            usersList.push(registerUser);
            warnMsg.classList.replace("d-block", "d-none");
            localStorage.setItem(
              "SmartLoginUsersList",
              JSON.stringify(usersList)
            );
            document
              .querySelector("#successMsg")
              .classList.replace("d-none", "d-block");
            window.location.href = "../index.html";
          }
        }
      } else {
        usersList.push(registerUser);
        warnMsg.classList.replace("d-block", "d-none");
        localStorage.setItem("SmartLoginUsersList", JSON.stringify(usersList));
      }
    } else {
      document
        .querySelector(".alert-warning")
        .classList.replace("d-none", "d-block");
      setTimeout(function () {
        document
          .querySelector(".alert-warning")
          .classList.replace("d-block", "d-none");
      }, 2000);
    }
  }
});