
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
const validImgUrl = (url) => {
    const urlPattern =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-]))?/;
    if (typeof url === 'object') {
      return urlPattern.test(url.value);
    }
    return urlPattern.test(url);
  };

  const checkLength = (value, len) => {
    if (value.trim().length >= len) {
      return true;
    }
    return false;
  };
export{validEmail, validPassword, validImgUrl,checkLength};