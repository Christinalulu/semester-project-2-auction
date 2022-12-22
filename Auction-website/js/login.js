
import { valadtionEmail} from "./utils/validation";


const loginForm = document.getElementById('login-form')
const email = document.getElementById("email")
const emailError = document.getElementById("email-error")
const password = document.getElementById("password")
const passwordError = document.getElementById("password-error")

// console.log(loginForm);
// console.log(email);
// console.log(emailError);
// console.log(password);
// console.log(passwordError);


   loginForm.addEventListener('submit', e => {
      e.preventDefault();
     
   
      let isEmail = false;
      if(email.value.trim().length > 0 && valadtionEmail(email.value) === true ){
         emailError.classList.add("hidden");
         isEmail = true;
      }else if(email.value.trim().length && valadtionEmail(email.value)!== true){
         emailError.classList.remove("hidden")
      }





      console.log(isEmail, "Checking Email");

      let isPassword = false;
      if(password.value.trim(). length > 8){
         passwordError.classList
      }
   });





