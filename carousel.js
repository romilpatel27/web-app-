// carousel.js

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].style.display = 'none';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
    }
  
    showSlide(currentSlide);
  
    document.querySelector('.prev').addEventListener('click', function () {
      showSlide(currentSlide - 1);
    });
  
    document.querySelector('.next').addEventListener('click', function () {
      showSlide(currentSlide + 1);
    });
  });
  