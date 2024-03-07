/*

How to handle dark mode with CSS and JavaScript? (with SVG toggle button)

Tutorial: https://youtu.be/GUSUA72t7p0

Follow me on 𝕏 for more: https://twitter.com/HunorBorbely

*/

const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// Check if dark mode is preferred
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Get dark-mode from localStorage or use the value from the media query
let darkMode = localStorage.getItem("dark-mode") ?? darkModeMediaQuery.matches;

// Set dark-mode class on body if darkMode is true and set icon
if (darkMode) {
  document.body.classList.add("dark-mode");
  darkIcon.setAttribute("display", "none");
} else {
  lightIcon.setAttribute("display", "none");
}

// Update on OS dark mode change
darkModeMediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    darkMode = true;
  } else {
    darkMode = false;
  }
  document.body.classList.toggle("dark-mode");

  if (darkMode) {
    lightIcon.setAttribute("display", "block");
    darkIcon.setAttribute("display", "none");
  } else {
    lightIcon.setAttribute("display", "none");
    darkIcon.setAttribute("display", "block");
  }
});

// Toggle dark mode on button click
function toggleDarkMode() {
  // Toggle darkMode variable
  darkMode = !darkMode;

  // Store darkMode variable in localStorage
  localStorage.setItem("dark-mode", darkMode);

  // Toggle dark-mode class on body
  document.body.classList.toggle("dark-mode");

  // Toggle light and dark icons
  if (darkMode) {
    lightIcon.setAttribute("display", "block");
    darkIcon.setAttribute("display", "none");
  } else {
    lightIcon.setAttribute("display", "none");
    darkIcon.setAttribute("display", "block");
  }
}
