var dropdownButtons = document.getElementsByClassName("dropdownbtn");
var dropdownContents = document.getElementsByClassName("dropdown-content");
var subnavButtons = document.getElementsByClassName("subnavbtn");
var subnavContents = document.getElementsByClassName("subnav-content");
var i;
var currentlyOpenDropdownIndex = -1;

function toggleSubnavContent(index) {
  var subnavContent = subnavContents[index];
  var subnavButton = subnavButtons[index];

  if (subnavContent.style.display === "block") {
    subnavContent.style.display = "none";
    subnavButton.classList.remove("active");
  } else {
    subnavContent.style.display = "block";
    subnavButton.classList.add("active");
  }
}

function addToggleClickHandlerSubnav(element, index) {
  element.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleSubnavContent(index);
  });
}

for (i = 0; i < subnavButtons.length; i++) {
  addToggleClickHandlerSubnav(subnavButtons[i], i);
  addToggleClickHandlerSubnav(subnavContents[i], i);
}

function toggleDropdownContent(index) {
  var dropdownContent = dropdownContents[index];
  var dropdownButton = dropdownButtons[index];
  var closeButton = dropdownContent.querySelector(".closebtn");

  if (index === currentlyOpenDropdownIndex) {
    // Clicked dropdown is already open, so we close it
    dropdownContent.style.display = "none";
    currentlyOpenDropdownIndex = -1; // Update the variable to indicate no dropdown is open
  } else {
    // Close the previously open dropdown (if any)
    if (currentlyOpenDropdownIndex !== -1) {
      closeDropdown(currentlyOpenDropdownIndex);
    }

    // Open the clicked dropdown
    dropdownContent.style.display = "block";
    currentlyOpenDropdownIndex = index; // Update the variable to store the index of the currently open dropdown
  }

  // Add a click event listener to the close button
  closeButton.addEventListener("click", function(event) {
    event.stopPropagation();
    closeDropdown(index);
  });
}

function addToggleClickHandlerDropdown(element, index) {
  element.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleDropdownContent(index);
  });
}

function closeDropdown(index) {
  var dropdownContent = dropdownContents[index];
  var dropdownButton = dropdownButtons[index];
  dropdownContent.style.display = "none";
  dropdownButton.classList.remove("active");
  currentlyOpenDropdownIndex = -1; // Update the variable to indicate no dropdown is open
}

for (i = 0; i < dropdownButtons.length; i++) {
  addToggleClickHandlerDropdown(dropdownButtons[i], i);
}
