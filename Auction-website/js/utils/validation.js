function valadtionEmail(email){
   const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no)$/;
   return email.match(string(regEx).toLowerCase());
}
export{valadtionEmail};