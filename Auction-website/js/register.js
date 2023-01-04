import { validateEmail,validatePassword} from "./utils/validation";

console.log("Hello world");

const registerFrom = document.getElementById("register-from");

const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");

const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const passwordConfirm = document.getElementById("confirm-password");
const passwordConfirmError = document.getElementById("password-confirm-error");
const passwordMatching = document.getElementById("password-match-error");

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

let isValidEmail = false;if(email.value.trim().length && validateEmail(email.value) === true ){
   emailError.classList.add('hidden');
   isValidEmail = true;
}else{
   emailError.classList.remove('hidden');
}

let isPassword = false;
if(password.value.trim().length >= 6){
   passwordError.classList.add('hidden')
   isPassword = true;
}else{
   passwordError.classList.remove('hidden')
}

let isPasswordConfirm = false;
if(passwordConfirm.value.trim().length >= 6){
   passwordConfirmError.classList.add('hidden');
 isPasswordConfirm = true;
}else{
   passwordConfirmError.classList.remove('hidden');
}

let isPasswordMatching = false;
isPasswordMatching = validatePassword(password.value, passwordConfirm.value);
if(isPasswordMatching){
   passwordMatching
}




})
