document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const nextButtons = document.querySelectorAll('.arrow.next'); // Select ALL arrows
  const dots = document.querySelectorAll('.dots .dot');
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  // Show selected slide and update active class
  function showSlide(index) {
      if (index < 0) {
          index = slides.length - 1;
      } else if (index >= slides.length) {
          index = 0;
      }

      // Update active class for slides
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');

      // Update active class for dots
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');

      currentIndex = index;
  }

  // Initial display
  showSlide(currentIndex);

  // On next button click (for each arrow)
  nextButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent any default behavior (e.g., form submission)
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
      });
  });

  // Dot navigation
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          showSlide(index);
      });
  });

  // Hamburger menu toggle
  if (hamburger) {
      hamburger.addEventListener('click', () => {
          menu.classList.toggle('active');
      });
  }
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
  
    hamburger.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  });
  