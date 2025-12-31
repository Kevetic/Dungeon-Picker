// Step 1: Get canvas and context
const canvas = document.getElementById("game") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

// Step 2: Game state (empty for now, we'll add player/enemy later)
let gameState = "menu"; // Could be "menu", "picking", "battle", "win", "lose"

// Step 3: Game loop function
function gameLoop() {
  // For now, just clear the canvas and draw something simple
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff";
  ctx.font = "20px Arial";
  ctx.fillText(`State: ${gameState}`, 10, 30);

  requestAnimationFrame(gameLoop);
}

// Step 4: Start the loop
gameLoop();
