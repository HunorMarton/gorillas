/*
const button = document.getElementById("fullscreen");

button.addEventListener("click", () => {
  document.documentElement.requestFullscreen();
});
console.log('hello');
*/

const enterFullscreen = document.getElementById("enter-fullscreen");
const exitFullscreen = document.getElementById("exit-fullscreen");

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    enterFullscreen.setAttribute("stroke", "transparent");
    exitFullscreen.setAttribute("stroke", "black");
  } else {
    document.exitFullscreen();
    enterFullscreen.setAttribute("stroke", "black");
    exitFullscreen.setAttribute("stroke", "transparent");
  }
}

window.addEventListener("resize", () => {
  // Resize canvas element
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Update scaling
  // . . .

  // Adjust size dependent properties
  // . . .

  if (!document.fullscreenElement) {
    // Specific logic for entering full screen
    // . . .
  }

  // Redraw canvas
  draw();
});
