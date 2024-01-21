// The state of the game
let state = {};

// ...

// The main canvas element and its drawing context
const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

// ...

newGame();

function newGame() {
  // Reset game state
  state = {
    phase: "aiming", // aiming | in flight | celebrating
    currentPlayer: 1,
    bomb: {
      x: undefined,
      y: undefined,
      rotation: 0,
      velocity: { x: 0, y: 0 },
    },

    // Buildings
    backgroundBuildings: [],
    buildings: [],
    blastHoles: [],

    // ...
  };

  // Generate background buildings
  for (let i = 0; i < 11; i++) {
    generateBackgroundBuilding(i);
  }

  // Generate buildings
  for (let i = 0; i < 8; i++) {
    generateBuilding(i);
  }

  // ...

  initializeBombPosition();

  // ...

  draw();
}

function generateBackgroundBuilding(index) {
  // ...
}

function generateBuilding(index) {
  // ...
}

function initializeBombPosition() {
  // ...
}

function draw() {
  // ...
}

// Event handlers
// ...

function throwBomb() {
  // ...
}

function animate(timestamp) {
  // ...
}

// ...
