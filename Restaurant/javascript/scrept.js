let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideInterval; // Variable to store the interval

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

nextButton.addEventListener('click', function() {
  clearInterval(slideInterval); // Clear interval on user interaction
  nextSlide();
});

prevButton.addEventListener('click', function() {
  clearInterval(slideInterval); // Clear interval on user interaction
  prevSlide();
});

// Function to start the automatic slide change
function startSlideInterval() {
  slideInterval = setInterval(function() {
    nextSlide();
  }, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

// Display the first slide initially and start the automatic slide change
showSlide(slideIndex);
startSlideInterval();
