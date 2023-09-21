// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
}

function toggleAccordion() {
  var collapseContents = document.querySelectorAll('.accordion-collapse');
  var buttons = document.querySelectorAll('.accordion-button');

  // Loop through all the accordion collapse sections
  collapseContents.forEach(function(collapseContent, index) {
      // Check if the clicked link's parent is the current accordion content
      if (collapseContent.contains(event.target)) {
          // Toggle the collapse state of the current accordion content
          if (collapseContent.classList.contains('show')) {
              collapseContent.classList.remove('show');
              buttons[index].setAttribute('aria-expanded', 'false');
              buttons[index].classList.add('collapsed');
          } else {
              collapseContent.classList.add('show');
              buttons[index].setAttribute('aria-expanded', 'true');
              buttons[index].classList.remove('collapsed');
          }
      }
  });
}
