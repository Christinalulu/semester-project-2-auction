import '../style.css'

const toggelMenu = document.getElementById("toggel-btn-menu");
const navBarMenu = document.getElementById("mobile-menu");
toggelMenu.addEventListener('click', function(){
   navBarMenu.classList.toggle('hidden')
})

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownMenu = document.getElementById("dropdown-menu");
console.log(dropdownBtn);
console.log(dropdownMenu);
dropdownBtn.addEventListener('click', function(){
   console.log("I click btn");
   dropdownMenu.classList.toggle('hidden')
})

