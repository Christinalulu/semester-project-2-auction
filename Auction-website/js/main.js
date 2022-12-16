import '../style.css'

const toggelMenu = document.getElementById("toggel-btn-menu");
const navBarMenu = document.getElementById("mobile-menu");
console.log(toggelMenu);
console.log(navBarMenu);
toggelMenu.addEventListener('click', function(){
   navBarMenu.classList.toggle('hidden')
})

