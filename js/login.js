var loginBtn = document.querySelector("#loginBtn");
var signUpBtn = document.querySelector("#signUpBtn");
var userLoginEmail = document.querySelector("#emailInput");
var userLoginPasswd = document.querySelector("#passInput");
var usersList = JSON.parse(localStorage.getItem("SmartLoginUsersList")) || null;

function isLoginFormEmpty() {
  return !userLoginEmail.value && !userLoginPasswd.value ? false : true;
}
loginBtn.addEventListener("click", function () {
  var isFormEmpty = isLoginFormEmpty();
  if (!isFormEmpty) {
    document.querySelector("#warnMsg").classList.replace("d-none", "d-block");
  } else {
    document.querySelector("#warnMsg").classList.replace("d-block", "d-none");

    if (usersList !== null) {
      for (var i = 0; i < usersList.length; i++) {
        if (
          usersList[i].email.toLowerCase() ===
            userLoginEmail.value.toLowerCase() &&
          usersList[i].password === userLoginPasswd.value
        ) {
          window.location.href = "../pages/home.html";
        }
      }
    } else {
      console.log("exit loop");
    }
  }
});
