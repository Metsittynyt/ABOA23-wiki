// Loop through all dropdown buttons to toggle between hiding and 
// showing its dropdown content - This allows the user to have multiple
// dropdowns without any conflict

var dropdownButtons = document.getElementsByClassName("subnavbtn");
var dropdownContents = document.getElementsByClassName("subnav-content");
var i;

function toggleDropdownContent(index) {
  var dropdownContent = dropdownContents[index];
  var dropdownButton = dropdownButtons[index];

  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    dropdownButton.classList.remove("active");
  } else {
    dropdownContent.style.display = "block";
    dropdownButton.classList.add("active");
  }
}

function addToggleClickHandler(element, index) {
  element.addEventListener("click", function() {
    toggleDropdownContent(index);
  });
}

for (i = 0; i < dropdownButtons.length; i++) {
  addToggleClickHandler(dropdownButtons[i], i);
  addToggleClickHandler(dropdownContents[i], i);
}

