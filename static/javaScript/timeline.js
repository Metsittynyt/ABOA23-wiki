// Wrap your code in a condition that checks if the necessary elements exist
if (document.querySelector('.timeline')) {
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
            const targetSlide = document.querySelector(targetId);
            if (targetSlide) {
                targetSlide.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    timelineContainer.addEventListener('scroll', () => {
        currentSlideIndex = Math.round(timelineContainer.scrollTop / window.innerHeight);
        updateButtonState(currentSlideIndex);
    });

    document.querySelector('.buttons').addEventListener('click', (event) => {
        const clickedButtonIndex = Array.from(buttons).indexOf(event.target);
        const nextSlideId = "#slide0" + (clickedButtonIndex + 1);
        const nextSlide = document.querySelector(nextSlideId);

        if (nextSlide) {
            nextSlide.scrollIntoView({ behavior: 'smooth' });
        }
        currentSlideIndex = clickedButtonIndex;
        updateButtonState(clickedButtonIndex);
    });
}
