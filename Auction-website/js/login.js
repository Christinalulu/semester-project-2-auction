
<<<<<<< HEAD



=======
import { validateEmail} from "./utils/validation";


const loginForm = document.getElementById('login-form')
const email = document.getElementById("email")
const emailError = document.getElementById("email-error")
const emailErrorValid = document.getElementById("email-error-valid")
const password = document.getElementById("password")
const passwordError = document.getElementById("password-error")



loginForm.addEventListener('submit', e => {
   e.preventDefault();

   let isEmail = false;
   if(email.value.trim().length > 0){
      emailError.classList.add('hidden');
      isEmail = true;
   }else{
      emailError.classList.remove('hidden');
   }

   let valdiEmail = false;
   if(email.value.trim().length && validateEmail(email.value) === true ){
      emailErrorValid.classList.add('hidden');
      valdiEmail = true;
   }else{
      emailErrorValid.classList.remove('hidden');
   }

   let isPassword = false;
   if(password.value.trim().length >= 8){
      passwordError.classList.add('hidden');
      isPassword = true;
   }else{
      passwordError.classList.remove('hidden');
   }
    let isLoginFromValid = isEmail && valdiEmail && isPassword;
    if(isLoginFromValid){
      const userData = {
         "email": email.value,
         "password": password.value
      }
      console.log(userData , "UserData");
    }
    // TODO: Make the Api call here
    // fetch and login user

})

>>>>>>> 5ca6297c1e9065bcffcdc7a2ef076be7c3c025e6



