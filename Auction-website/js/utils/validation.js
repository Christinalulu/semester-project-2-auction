function validateEmail(email) {
   const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no)$/;
   return email.match(regEx) ? true : false;
}

function validatePassword(password, passwordConfrim) {

   if (!password) {
       return false;
   }
   if (!passwordConfrim) {
       return false;
   }
   if (password !== passwordConfrim) {
       return false;
   } else {
       return true;
   }
}


export{validateEmail, validatePassword};