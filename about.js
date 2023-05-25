document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.querySelectorAll('.mobile-menu-items>li>a');
  const bar = document.querySelector('.bar');
  const xIcon = document.querySelector('.mobile-menu-toggler');
  const mobileMenu = document.querySelector('#mymobilemenu');
  const blurHerosection = document.querySelector('#show-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('mobile-menu1');
    mobileMenu.classList.toggle('mobile-menu');

    blurHerosection.classList.toggle('hero-section1');
  };

  const withdrawMenuBar = () => {
    toggleMenu();
    bar.style.display = 'none';
  };

  const sustainMenuBar = () => {
    toggleMenu();
    bar.style.display = 'block';
  };

  bar.addEventListener('click', withdrawMenuBar);
  xIcon.addEventListener('click', sustainMenuBar);
  Array.from(menuList).forEach((item) => {
    item.addEventListener('click', sustainMenuBar);
  });
});
