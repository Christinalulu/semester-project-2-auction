import { validEmail, checkLength } from "./utils/validation";
import { LOGIN_URL } from "./settings/api";
import { saveToken, saveUser } from "./settings/storage"; 

const loginForm = document.getElementById("login-form");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailValid = document.getElementById("email-error-valid");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

// console.log(password);
// console.log(email);
// console.log(loginForm);

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
     
    }

    const LOGIN_IN_USER_URL = `${LOGIN_URL }`
    console.log(LOGIN_IN_USER_URL);

    (async function logInUser(){
     try{
      const response = await fetch(LOGIN_IN_USER_URL,{
         method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
      })
      if (response.ok) {
         const data = await response.json();
         saveToken(data.accessToken);
         console.log(data);

         const userToSave = {
            "name": data.name,
            "email": data.email,
            "avatar": data.avatar,
            "credits": data.credits,
          };
          console.log(userToSave);
      }

     } catch(e){
      console.log(e);
     }
    

    })

    
  });
}
