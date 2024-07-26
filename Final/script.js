// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesToShow = 3; // Number of cards to show at once

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + slidesToShow) % totalSlides;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - slidesToShow + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * (100 / slidesToShow)}%)`;
}

// Autoslide feature
function autoSlide() {
    currentIndex = (currentIndex + slidesToShow) % totalSlides;
    updateSlider();
}

// Set interval for autoslide (e.g., every 3 seconds)
setInterval(autoSlide, 3000);

updateSlider();

document.addEventListener("DOMContentLoaded", function() {
    function animateValue(id, start, end, duration) {
      let range = end - start;
      let current = start;
      let increment = end > start ? 1 : -1;
      let stepTime = Math.abs(Math.floor(duration / range));
      let obj = document.getElementById(id);
      let timer = setInterval(function() {
        current += increment;
        obj.textContent = current + "+";
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    animateValue("happy-customers", 0, 549, 2000);
    animateValue("experienced-designers", 0, 189, 2000);
    animateValue("years-industry", 0, 8, 2000);
    animateValue("websites-designed", 0, 439, 2000);
    animateValue("logos-designed", 0, 679, 2000);
  });

  let carentIndex = 0;
  const slide = document.querySelectorAll('.slides');
  const totalSlidess = slides.length;
  const slidesToShoww = 4; // Number of cards to show at once
  
  document.querySelector('.nexts').addEventListener('click', () => {
    carentIndex = (carentIndex + slidesToShoww) % totalSlidess;
      dateSlider();
  });
  
  document.querySelector('.prevs').addEventListener('click', () => {
    carentIndex = (carentIndex - slidesToShoww + totalSlidess) % totalSlidess;
      dateSlider();
  });
  
  function dateSlider() {
      const slider = document.querySelector('.sliders');
      slider.style.transform = `translateX(-${carentIndex * (100 / slidesToShoww)}%)`;
  }
  
  // Autoslide feature
  function autoSlide() {
    carentIndex = (carentIndex + slidesToShoww) % totalSlidess;
      dateSlider();
  }
  
  // Set interval for autoslide (e.g., every 3 seconds)
  setInterval(autoSlide, 5000);
  
  dateSlider();


  
let slideIndexx = 0;

function showSlide(index) {
    const slido= document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    if (index >= slido.length) {
        slideIndexx = 0;
    } else if (index < 0) {
        slideIndexx = slido.length - 1;
    } else {
        slideIndexx = index;
    }
    const offset = -slideIndexx * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === slideIndexx);
    });
}

function moveSlide(n) {
    showSlide(slideIndexx + n);
}

function currentSlide(n) {
    showSlide(n);
}

function autoSlide() {
    setInterval(() => {
        moveSlide(1);
    }, 10000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndexx);
    autoSlide();
});

const toggleButton = document.querySelector('.toggle-button');
const navBox = document.querySelector('.nav-box');
toggleButton.addEventListener('click', () => {
    navBox.classList.toggle('active');
});
