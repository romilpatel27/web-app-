// carousel.js

/*document.addEventListener('DOMContentLoaded', function () {
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
  });*/

  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    let slideIndex = 0;
    const intervalTime = 5000; // Set the time between automatic transitions in milliseconds

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }
        slides[slideIndex].classList.add('active');
    }

    function nextSlide() {
        showSlide(slideIndex += 1);
    }

    function prevSlide() {
        showSlide(slideIndex -= 1);
    }

    // Automatic transition
    setInterval(nextSlide, intervalTime);

    // Manual transition on button click
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    prevBtn.addEventListener("click", function() {
        prevSlide();
    });

    nextBtn.addEventListener("click", function() {
        nextSlide();
    });

    // Show the first slide initially
    showSlide(slideIndex);
});


  