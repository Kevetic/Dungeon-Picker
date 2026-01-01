// Step 1: Get canvas and context
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const WeaponArray = [
    { name: "Sword", damage: 5, passiveType: "damageBoost", passiveValue: 1 },
    { name: "Knife", damage: 5, passiveType: "poison", passiveValue: 3 },
    { name: "Staff", damage: 5, passiveType: "block", passiveValue: 25 },
];
let player = { health: 100, weapon: "sword" };
window.addEventListener("keydown", (event) => {
    if (event.key === "1") {
        player.weapon = "sword";
        console.log("Sword selected");
    }
    else if (event.key === "2") {
        player.weapon = "knife";
        console.log("Knife selected");
    }
    else if (event.key === "3") {
        player.weapon = "staff";
        console.log("Staff selected");
    }
});
// Step 2: Game state (empty for now, we'll add player/enemy later)
let gameState = WeaponArray.map((weapon) => weapon.name);
// Step 3: Game loop function
function Draw() {
    // For now, just clear the canvas and draw something simple
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    ctx.fillText(`Select: ${gameState}`, 10, 30);
    ctx.fillStyle = "#fff";
    ctx.fillRect(canvas.width / 2, canvas.height / 2, 50, 50);
    requestAnimationFrame(Draw);
}
// Step 4: Start the loop
Draw();
export {};
//# sourceMappingURL=client.js.map