const buttons = document.querySelectorAll('.buttons label');
const sections = document.querySelectorAll('.section');

// Listen for the scroll event on the container
document.querySelector('.timeline').addEventListener('scroll', () => {
  // Calculate the current section index based on scroll position
  const currentIndex = Math.round(document.querySelector('.timeline').scrollTop / window.innerHeight);

  // Update button states
  buttons.forEach((button, index) => {
    if (index === currentIndex) {
      button.style.opacity = '1';
      button.style.height = '50px';
    } else {
      button.style.opacity = '0.5';
      button.style.height = '20px';
    }
  });
});