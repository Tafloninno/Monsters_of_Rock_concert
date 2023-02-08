const humburger = document.querySelector('.hamburger_menu');
const navMenu = document.querySelector('.nav_link');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav_link_line').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));
