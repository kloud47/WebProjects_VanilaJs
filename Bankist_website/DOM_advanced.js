'use strict';

// Selecting in DOM //////////////////////////////////////////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

/////////////////// Creating and inserting element /////////////////////////////////////////////
// .insertAdjacentHTML
const header = document.querySelector('.header');
// Creating a message div:
const message = document.createElement('div');
message.classList.add('cookie-message');

// Inside of message div:
message.innerHTML = `We use cookies for improved functionality and analytics. <button
    class="btn btn--close-cookie">Got it!</button>`;

// adding message div to html doc:
            // ((Inside header)) //
// header.prepend(message);
// header.append (message);
// header.append(message.cloneNode(true));

            // ((Outside header)) //
header.before(message);
// header.after(message.cloneNode(true));

document.querySelector('.btn--close-cookie').addEventListener('click', function() {
    // message.parentElement.removeChild(message); // older method:
    message.remove();
});

// const msg = `
//     <div class="cookie-message">
//         "We use cookie for improved functionality and analytics. "<button 
//         class="btn btn--close-cookie">Got it!</button>
//     </div>`;

// header.insertAdjacentElement('afterend', msg);

/////////////////////////////////////////////////////////////////////////////////////////
/// Style:
message.style.backgroundColor = '#37383d';
message.style.setProperty('width', '120%')// method 2nd

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).width);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes:
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

// Data attributes:
console.log(logo.dataset.versionNumber);

//// classes:
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

                                                                                                //
///// Event Propagation ////////////////////////////////////////////////////////////////////
const randomInt = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log(e.currentTarget === this)
    console.log(e.target, e.currentTarget)// event triggerred in (bubbling phase)

  // Stop propogation:
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target, e.currentTarget)// Event is triggerred in (bubbling phase)
}, false);

document.querySelector('.nav').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target, e.currentTarget)
}, true);// true is the third parameter acc to which event is triggerred in (catching phase):

                                                                                            //
/////////////////////////////////////////////////////////////////////////////////////////////
           ///////////// listening to events: ////////////////////////////////////
const h1 = document.querySelector('h1');

const alertH1 = (e) => {
    alert('addEventListener: Great! you are reading the heading :D');

    // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 2000);

// h1.onmouseenter = (e) => {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

                                                                                //
/////////////// Traversing DOM //////////////////////////////////////////////////
// const h1 = document.querySelector('h1');

/// Going downwards: child =>
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color =  'white';
h1.lastElementChild.style.color =  'orangered';

/// Going upwards: parent =>
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

/// Going sideways: siblings =>
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) {
if(el !== h1) el.style.transform = 'scale(0.5)';
});