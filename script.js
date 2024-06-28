const header = document.querySelector("header");
const menu = document.querySelector('.navmenu')
const openMenu = document.querySelector('#menu-icon')


window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
openMenu.addEventListener("click", ()=>{
  openMenu.classList.toggle('bx-x')
  menu.classList.toggle('open')
})