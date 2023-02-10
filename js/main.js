const burgerBtn = document.querySelector('#burger');
const header = document.querySelector('.header');

const openProjectBtn = document.querySelector('.about__projects');
const projects = document.querySelector('.projects__container');

const closeProjectsBtn = document.querySelector('.project__close');

burgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
});


openProjectBtn.addEventListener('click', () => {
    projects.classList.add('project__open');
});

closeProjectsBtn.addEventListener('click', () => {
    projects.classList.remove('project__open');
});