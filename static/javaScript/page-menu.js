// Function to show content and set the active button
function showContent(contentNumber) {

    var buttons = document.getElementsByClassName('page-menu-item');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            scrollToTop();
        });
    }


    // Hide all content divs
    var allContent = document.querySelectorAll('.page-menu-content');
    allContent.forEach(function (content) {
        content.style.display = 'none';
    });

    // Show the selected content
    var selectedContent = document.getElementById('content' + contentNumber);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    // Remove the "active" class from all buttons
    var allButtons = document.querySelectorAll('.page-menu-item');
    allButtons.forEach(function (button) {
        button.classList.remove('active');
    });

    // Add the "active" class to the clicked button
    var clickedButton = document.querySelector('.page-menu-item[data-content="' + contentNumber + '"]');
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

// Show the "Overview" content by default when the page loads
showContent(1);

function scrollToTop() {
    // Get the "page-menu" element
    var pageMenu = document.querySelector('.scroll-here');

    // Calculate the scroll position to align the "page-menu" with top: 120px
    var scrollPosition = pageMenu.getBoundingClientRect().top + window.scrollY - 120;

    // Scroll to the calculated position with smooth behavior
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
}
