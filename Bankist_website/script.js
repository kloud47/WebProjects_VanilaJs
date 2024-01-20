'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]');


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => 
  btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function(e) {
    // const s1coords = section1.getBoundingClientRect();// getting coordiantes of the point I want to scroll to
    // console.log(s1coords);

    // console.log(e.target.getBoundingClientRect());

    // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

    // console.log('Height/width viewport', 
    // document.documentElement.clientHeight, 
    // document.documentElement.clientWidth);

    // Scrolling:
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth'
    // });
    section1.scrollIntoView({behavior: 'smooth'});
});
                                                                                              //
/////////// Implementing page navigation bar /////////////////////////////////////////////////
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

//// Event Delegation /////////////////////////////////////////////////
// 1) Add event listener to common parent element
// 2) Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(el) {
  el.preventDefault();
  // Matching strategy:
  if(el.target.classList.contains('nav__link')) {
    const id = el.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  };
});

                                                                                                //
/////// Tabbed component /////////////////////////////////////////////////////////////////////////

tabsContainer.addEventListener('click', function(el) {
  // const clicked = el.target.parentElement
  const clicked = el.target.closest('.operations__tab');

  // Guard Clause:
  if(!clicked) return;

  // Active Tab:
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  clicked.classList.add('operations__tab--active');

  // Active content area:
  tabsContent.forEach(e => e.classList.remove('operations__content--active'));

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add(`operations__content--active`);
});

                                                                                                          //
//// Menu fade animation /////////////////////////////////////////////////////////////////////////////////
// mouseenter does not bubble:
const handleHover = (e) => {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  };
};

// passing an "argument" into handler function:
nav.addEventListener('mouseover', handleHover.bind(0.5) );// passing argument using Bind:

nav.addEventListener('mouseout', e => handleHover(e, 1) );

                                                                                          //
////////// (Sticky Navigation) ////////////////////////////////////////////////////////////////////

// Using scroll event
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function() { 
//   // console.log(window.scrollY);

//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Using The intersection Observer API
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const HeaderObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px` // creating margin outside or inside target (header)
});
HeaderObserver.observe(header);

                                                                                                //
///////// Revealing elements on scroll //////////////////////////////////////////////////////////

const revealSection = function(entries, Observer) {
  const [entry] = entries;
  // guard clause:
  if(!entry.isIntersecting) return;
  
  entry.target.classList.remove('section--hidden');
  Observer.unobserve(entry.target);
}

const sectionObserve = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});

allSections.forEach(function(section) {
  sectionObserve.observe(section);
});

                                                                                                //
/////// Lazy loading images ///////////////////////////////////////////////////////////////////////////

const loading = function(entries, Observer) {
  const [entry] = entries;
  // Guard clause:
  if(!entry.isIntersecting) return;

  //Replace src with data-src:
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => 
  entry.target.classList.remove('lazy-img'));

  Observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

                                                                                        //
//// Building a slider ///////////////////////////////////////////////////////////////////
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';
let currSlide = 0;
const maxSlide = slides.length;

const createDots = function() {
  slides.forEach(function(_, i) {
    dotContainer.insertAdjacentHTML('beforeend', 
    `<button class="dots__dot" data-slide="${i}"></button>`);
  });
};
createDots();

const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach((dot => 
    dot.classList.remove('dots__dot--active')));
  
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}

const goTOslide = function(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100*(i-slide)}%)`;
  });
}

goTOslide(0);

// Next slide:
const nextSlide = function() {
  (currSlide === maxSlide-1) ? currSlide = 0 : currSlide++;
  goTOslide(currSlide);
  activateDot(currSlide);
};
// Previous slide:
const prevSlide = function() {
  (currSlide === 0) ? currSlide = maxSlide-1 : currSlide--;
  goTOslide(currSlide);
  activateDot(currSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e) {
  // if(e.key === 'ArrowLeft') prevSlide();
  // if(e.key === 'ArrowRight') nextSlide();

  e.key === 'ArrowLeft' && prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

document.addEventListener('click', function(e) {
  if(e.target.classList.contains('dots__dot')) {
    const {slide} = e.target.dataset;
    activateDot(slide);
    goTOslide(slide);
  };
});

                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////
///////////////// Lifecycle DOM events ////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function(e) {
//   console.log('HTML parsed and DOM tree built!', e);
// });

// window.addEventListener('load', function(e) {
//   console.log('Page fully loaded', e);
// });

// window.addEventListener('beforeunload', function(e) {
//   e.preventDefault(); // some browsers except chrome need this
//   console.log(e);
//   e.returnValue = '';
// });