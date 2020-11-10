const burger = document.querySelector('.burger')
const navbar = document.querySelector('#navbar')
const main = document.querySelector('#main')

function toggleNav(){
  navbar.classList.toggle('nav-active')
  main.classList.toggle('main-active')
  burger.classList.toggle('burger-active')
}

burger.addEventListener('click',function(){
  toggleNav();
});