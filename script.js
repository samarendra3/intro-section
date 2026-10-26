const body = document.body;
const navLinks = document.querySelectorAll('.nav-link');

const openMenu = () => body.classList.add('menu-open');
const closeMenu = () => body.classList.remove('menu-open');
document.querySelector('.open-menu').addEventListener('click', openMenu);
document.querySelector('.close-menu').addEventListener('click', closeMenu);
document.querySelector('.overlay').addEventListener('click', closeMenu);

function setOpen(link, open) {
  link.classList.toggle('link-open', open);
  link.setAttribute('aria-expanded', String(open));
  link.querySelector('.arrow').src = open
    ? './assets/images/icon-arrow-up.svg'
    : './assets/images/icon-arrow-down.svg';
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const willOpen = !link.classList.contains('link-open');
    navLinks.forEach((other) => { if (other !== link) setOpen(other, false); });
    setOpen(link, willOpen);
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) navLinks.forEach((link) => setOpen(link, false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navLinks.forEach((link) => setOpen(link, false));
    closeMenu();
  }
});
