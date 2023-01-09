import { validEmail, validPassword } from "./utils/validation";
import{REGISTER_URL} from "./settings/api";

const registerFrom = document.getElementById("register-from");
const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const confirmPassword = document.getElementById("confirm-password");
const passwordConfirmError = document.getElementById("password-confirm-error");
const passwordMatching = document.getElementById("password-match-error");
const registerErrMessage = document.getElementById("general-message");

async function registerUser(url, data){
   try{
      const response = await fetch(REGISTER_URL,{
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
        
      })
      console.log(response);
      if(response.ok){
         location.href = './index.html';
      }else{
         const err = await response.json();
         const message = `${err.errors[0].message}`;
         throw new Error(message);
      }
   }catch(error){
      registerErrMessage.innerHTML = `${error}`

   }
}


registerFrom.addEventListener('submit', function(e){
e.preventDefault();

let isUsername = false;
if(username.value.trim().length > 0){
   usernameError.classList.add('hidden');
   isUsername = true;
}else{
   usernameError.classList.remove('hidden')
}

let isEmail = false;
if(email.value.trim().length > 0){
   emailError.classList.add('hidden')
   isEmail = true;
}else{
   emailError.classList.remove('hidden')
}

let isValidEmail = false;
if(email.value.trim().length && validEmail(email.value) === true){
   emailError.classList.add('hidden');
   isValidEmail = true;
}else if(email.value.trim().length && validEmail(email.value) !== true){{
   emailError.classList.remove('hidden');
}}

let isPassword = false;
if(password.value.trim().length >= 8){
   passwordError.classList.add('hidden')
   isPassword = true;
}else{
   passwordError.classList.remove('hidden')
}

let isPasswordConfirm = false;
if(confirmPassword.value.trim().length >= 8){
   passwordConfirmError.classList.add('hidden');
 isPasswordConfirm = true;
}else{
   passwordConfirmError.classList.remove('hidden');
}

let isPasswordMatching = false;
isPasswordMatching = validPassword(password.value, confirmPassword.value);
if(isPasswordMatching){
   passwordMatching.classList.add('hidden');
   isPasswordMatching = true;
}else{
   passwordMatching.classList.remove('hidden')
}

let isValidationTrue = 
isUsername
&& isEmail
&& isValidEmail
&& isPassword
&& isPasswordConfirm
&& isPasswordMatching;

if(isValidationTrue){
   console.log("SUCCESS VALIDATION");
   const userData = {
      "name": username.value,
      "email": email.value,
      "password": password.value
   }

   console.log(userData);
   registerUser(REGISTER_URL, userData )
}else{
   console.log("VALIDATE FROM FAILED");
}
});



