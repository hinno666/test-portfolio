const burgerBtn = document.querySelector('#burger');
const header = document.querySelector('.header');


const body = document.body;


const openProjectBtn = document.querySelector('.about__projects');
const projects = document.querySelector('.projects__container');

const closeProjectsBtn = document.querySelector('.project__close');


//burger menu

burgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    body.classList.toggle('no__scroll');
});



//projects

openProjectBtn.addEventListener('click', () => {
    projects.classList.add('project__open');
});

closeProjectsBtn.addEventListener('click', () => {
    projects.classList.remove('project__open');
});

//scroll

const aboutLinks = document.querySelectorAll(".menu__link");

aboutLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    header.classList.remove("open");
    body.classList.remove('no__scroll');
    const blockID = link.getAttribute("href").substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

//scroll

window.addEventListener("scroll", function () {
  let scrollToTopButton = document.querySelector(".scroll-to-top");
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

document
  .querySelector(".scroll-to-top")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let scrollDuration = 300;
    let scrollStep = -window.scrollY / (scrollDuration / 15);
    let scrollInterval = setInterval(function () {
      if (window.scrollY != 0) {
        window.scrollBy(0, scrollStep);
      } else clearInterval(scrollInterval);
    }, 15);
  });


  // email form

