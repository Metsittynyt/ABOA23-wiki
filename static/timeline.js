const buttons = document.querySelectorAll('.buttons label');
const sections = document.querySelectorAll('.section');
const pathLinks = document.querySelectorAll('.path-link');
const timelineContainer = document.querySelector('.timeline');

let currentSlideIndex; // Initialize the current slide index

// Function to update button states
function updateButtonState(currentIndex) {
    buttons.forEach((button, index) => {
        if (index === currentIndex) {
            button.style.opacity = '1';
            button.style.height = '50px';

        } else {
            button.style.opacity = '0.5';
            button.style.height = '20px';
        }
    });
}

pathLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        console.log("targetID : " + targetId);
        const targetSlide = document.querySelector(targetId);
        console.log("targetSlide : " + targetSlide);
        if (targetSlide) {
            targetSlide.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll event listener to the timeline container
timelineContainer.addEventListener('scroll', () => {
    // Calculate the current slide index based on scroll position
    currentSlideIndex = Math.round(timelineContainer.scrollTop / window.innerHeight);
    console.log("scroll currentSlideIndex : " + currentSlideIndex);
    // Update button states
    updateButtonState(currentSlideIndex);
});

// Add click event listener to the buttons container
document.querySelector('.buttons').addEventListener('click', (event) => {
    const clickedButtonIndex = Array.from(buttons).indexOf(event.target);
    console.log("clicked " + clickedButtonIndex);
    const nextSlideId = "#slide0" + (clickedButtonIndex+1);
    console.log("next slide id : " + nextSlideId);
    const nextSlide = document.querySelector(nextSlideId);
    console.log("next slide : " + nextSlide);
    
    if (nextSlide) {
        nextSlide.scrollIntoView({ behavior: 'smooth' });
    }
    currentSlideIndex = clickedButtonIndex;
    updateButtonState(clickedButtonIndex);
});