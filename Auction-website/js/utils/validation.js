




function validEmail(email) {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no)$/;
    return !!email.match(regEx);
}

function validPassword(password, confirmPassword) {
   if (!password) {
       return false;
   }
   if (!confirmPassword) {
       return false;
   }
   if (password !== confirmPassword) {
       return false;
   } else {
       return true;
   }
}

export{validEmail, validPassword};