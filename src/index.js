// Get initial state from localStorage and set checkbox state
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.checked = JSON.parse(localStorage.getItem("isdark")) || false;

// Function to handle changes and update localStorage
function updateDarkMode(element) {
  localStorage.setItem("isdark", JSON.stringify(element.checked));
}
