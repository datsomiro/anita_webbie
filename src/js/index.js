'use strict';


/* Mobile Navigation */

const navMenu = document.querySelector('.nav__menu');
const navContainer = document.querySelector('.nav__container');
const navClose = document.querySelector('.nav__close');

navMenu.addEventListener('click', () => {
  navContainer.classList.add('active');
  navClose.classList.add('active');
});

navClose.addEventListener('click', () => {
  navContainer.classList.remove('active');
  navClose.classList.remove('active');
});


/* Smooth Scrolling on Anchors */

// Selecting all navigation links
let navLink = document.querySelectorAll('.nav__link');

// Iterate through each of the links
navLink.forEach(link => {

  // Click event on link
  link.onclick = function (e) {

    // Prevent scrolling if the hash value is blank
    e.preventDefault();

    // Get the destination to scroll to using the hash property
    let destination = document.querySelector(this.hash);

    // Scroll to the destination using scrollIntoView method 
    destination.scrollIntoView({ 
      behavior: 'smooth'
    });

    // Closing mobile menu by removing active class
    navContainer.classList.remove('active');
    navClose.classList.remove('active');
  }
});
