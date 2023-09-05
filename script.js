'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function () {
  // const s1coords=section1.getBoundingClientReact(); //coordinates of section relative to the visible viewport, width, etc
  // window.scrollTo({
  //   left: s1coords.left+window.pageXOffset, //pageOffsets make sure these positions are not relative to the viewport
  //   top: s1coords.top+window.pageYOffset,
  //   behavior: "smooth"
  // })
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function(el){
//   e.preventDefault();
//   const id = this.getAttribute('href')
//   document.querySelector(id).scrollIntoView({behavior:'smooth'}) //not efficient for 10000 elements, then 1000 copies of function
// })

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); //e.target is the element that was clicked
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  const clicked= e.target.closest('.operations__tab'); //without closest causes span elements inside it to be the target, which shouldnt happen

  if(!clicked) return; //in cases where we are clicking outside the buttons

  tabs.forEach(t=>t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c=>c.classList.remove('operations__content--active'));
  //activate tab
  clicked.classList.add('operations__tab--active')

  //activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active') //attribute was data-tab
})