
import '../style.css'
import{  LISTING_URL } from "./settings/api"

const toggelMenu = document.getElementById("toggel-btn-menu");
const navBarMenu = document.getElementById("mobile-menu");
toggelMenu.addEventListener('click', function(){
   navBarMenu.classList.toggle('hidden')
})

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownMenu = document.getElementById("dropdown-menu");
dropdownBtn.addEventListener('click', function(){
   dropdownMenu.classList.toggle('hidden')
})


