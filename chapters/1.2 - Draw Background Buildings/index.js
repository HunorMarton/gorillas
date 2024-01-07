// The state of the game
let state = {};

// ...

// Configuration
const numberOfBuildings = 8;
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
  for (let i = 0; i < numberOfBuildings + 3; i++) {
    generateBackgroundBuilding(i);
  }

  // Generate buildings
  for (let i = 0; i < numberOfBuildings; i++) {
    generateBuilding(i);
  }

  // ...

  initializeBombPosition();

  // ...

  draw();
}

function generateBackgroundBuilding(index) {
  const previousBuilding = state.backgroundBuildings[index - 1];

  const x = previousBuilding
    ? previousBuilding.x + previousBuilding.width + 4
    : -30;

  const minWidth = 60;
  const maxWidth = 110;
  const width = minWidth + Math.random() * (maxWidth - minWidth);

  const minHeight = 80;
  const maxHeight = 350;
  const height = minHeight + Math.random() * (maxHeight - minHeight);

  state.backgroundBuildings.push({ x, width, height });
}

function generateBuilding(index) {
  // ...
}

function initializeBombPosition() {
  // ...
}

function draw() {
  ctx.save();

  // Flip coordinate system upside down
  ctx.translate(0, window.innerHeight);
  ctx.scale(1, -1);

  // Draw scene
  drawBackground();
  drawBackgroundBuildings();
  drawBuildings();
  drawGorilla(1);
  drawGorilla(2);
  drawBomb();

  // Restore transformation
  ctx.restore();
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
  gradient.addColorStop(1, "#F8BA85");
  gradient.addColorStop(0, "#FFC28E");

  // Draw sky
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  // Draw moon
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.beginPath();
  ctx.arc(300, 350, 60, 0, 2 * Math.PI);
  ctx.fill();
}

function drawBackgroundBuildings() {
  state.backgroundBuildings.forEach((building) => {
    ctx.fillStyle = "#947285";
    ctx.fillRect(building.x, 0, building.width, building.height);
  });
}

function drawBuildings() {
  // ...
}

function drawGorilla(player) {
  // ...
}

function drawBomb() {
  //...
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
