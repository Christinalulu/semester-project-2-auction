import { validEmail, checkLength } from "./utils/validation";
import { LOGIN_URL } from "./settings/api";
import { saveToken } from "./settings/storage"; 

const loginForm = document.getElementById("login-form");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailValid = document.getElementById("email-error-valid");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isEmail = false;
    if (checkLength(email.value, 0)) {
      emailError.classList.add("hidden");
      isEmail = true;
    } else {
      emailError.classList.remove("hidden");
    }
    let isValidEmail = false;
    if (checkLength && validEmail(email.value) === true) {
      emailValid.classList.add("hidden");
      isValidEmail = true;
    } else if (checkLength && validEmail(email.value) !== true) {
      {
        emailValid.classList.remove("hidden");
      }
    }
    let isPassword = false;
    if (checkLength(password.value, 8)) {
      passwordError.classList.add("hidden");
      isPassword = true;
    } else {
      passwordError.classList.remove("hidden");
    }
    let loginData = isEmail && isValidEmail && isPassword;
    console.log("Success");
    if(loginData){
      const userData = {
         "email": email.value,
         "password": password.value,
      }
      console.log(userData);
      const LOGIN_IN_USER_URL = `${LOGIN_URL }`
     
    }
  });
}
