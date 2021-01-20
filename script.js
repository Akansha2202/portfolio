'use strict';

const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;
setInterval(() => {
  i++;

  const icon = document.querySelector('.section-1-icons .change');
  icon.classList.remove('change');

  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 2500);

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnOpenModal = document.querySelectorAll(".show-modal");
// const openModal = function () {
//   console.log("click");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };
// const closeModal = function () {
//   console.log("click");
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// for (let i = 0; i < btnOpenModal.length; i++) {
//   btnOpenModal[i].addEventListener("click", openModal);
// }

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

const overlay = document.querySelector('.overlay');
// const btnOpenModal = document.querySelectorAll(".card-btn");
const btnCloseModal = document.querySelectorAll('.btn--close-modal');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const education = document.querySelector('.education');
const course = document.querySelector('.course');
const skills = document.querySelector('.skill');

const openModal1 = function (e) {
  e.preventDefault();
  // console.log('Clicked', this);
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openModal2 = function (e) {
  e.preventDefault();
  // console.log('Clicked', this);
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openModal3 = function (e) {
  e.preventDefault();
  // console.log('Clicked', this);
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  modal1.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
};

education.addEventListener('click', openModal1);
skills.addEventListener('click', openModal3);
course.addEventListener('click', openModal2);

// btnCloseModal.addEventListener("click", closeModal);

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', closeModal);
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
