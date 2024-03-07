/*

How to use the Fullscreen API in JavaScript?

Tutorial: https://youtu.be/jX3mIQdQQ2w

Follow me on 𝕏 for more: https://twitter.com/HunorBorbely

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
