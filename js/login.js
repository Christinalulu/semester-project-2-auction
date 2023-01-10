import { validEmail, checkLength } from "./utils/validation";
import { LOGIN_URL } from "./settings/api";
import { saveToken, saveUser } from "./settings/storage";

const loginForm = document.getElementById("login-form");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailValid = document.getElementById("email-error-valid");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const generalMessage = document.getElementById("general-message");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let isEmail;
    if (checkLength(email.value, 0)) {
      emailError.classList.add("hidden");
      isEmail = true;
    } else {
      emailError.classList.remove("hidden");
    }
    let isValidEmail;
    if (checkLength && validEmail(email.value) === true) {
      emailValid.classList.add("hidden");
      isValidEmail = true;
    } else if (checkLength && validEmail(email.value) !== true) {
      {
        emailValid.classList.remove("hidden");
      }
    }
    let isPassword;
    if (checkLength(password.value, 8)) {
      passwordError.classList.add("hidden");
      isPassword = true;
    } else {
      passwordError.classList.remove("hidden");
    }
    let isLogInFromValid = isEmail && isValidEmail && isPassword;
    let userData;
    if (isLogInFromValid) {
      userData = {
        email: email.value,
        password: password.value,
      };
      const LOGIN_USER_URL = `${LOGIN_URL}`;
      (async function logInUser() {
        const response = await fetch(LOGIN_USER_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        if (response.ok) {
          const data = await response.json();
          saveToken(data.accessToken);
          const saveUserInfo = {
            name: data.name,
            email: data.email,
            avatar: data.avatar,
            credits: data.credits,
          };
          saveUser(saveUserInfo);
          location.href = "/profile.html";
        } else {
          const err = await response.json();
          const message = `${err.errors[0].message}`;
          throw new Error(message);
        }
      })().catch((err) => {
        generalMessage.innerHTML = `${err}`;
      });
    }
  });
}
