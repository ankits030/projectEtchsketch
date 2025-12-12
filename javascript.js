let currentMode = "black";

document.getElementById("Black").addEventListener("click", () => currentMode = "black");
document.getElementById("Rainbow").addEventListener("click", () => currentMode = "rainbow");
document.getElementById("Gradient").addEventListener("click", () => currentMode = "gradient");
document.getElementById("Eraser").addEventListener("click", () => currentMode = "eraser");
document.getElementById("Clear").addEventListener("click", clearGrid);

function makeGrid() {
  const n = document.getElementById("sizeInput").value;

  if (n < 1 || n > 100) {
    alert("Enter a number between 1 and 100");
    return;
  }

  const grid = document.getElementById("grid");
  grid.innerHTML = ""; 

  grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${n}, 1fr)`;

  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    div.dataset.darkness = 0;

  div.addEventListener("mouseover", () => applyColor(div));



    grid.appendChild(div);
  }
}

function applyColor(cell) {
  if (currentMode === "black") {
    cell.style.backgroundColor = "black";
  }

  else if (currentMode === "rainbow") {
    cell.style.backgroundColor = randomColor();
  }

  else if (currentMode === "eraser") {
    cell.style.backgroundColor = "white";
    cell.dataset.darkness = 0;
  }

  else if (currentMode === "gradient") {
    let d = Number(cell.dataset.darkness);
    if (d < 10) d++;
    cell.dataset.darkness = d;
    let shade = d * 0.1;
    cell.style.backgroundColor = `rgba(0,0,0,${shade})`;
  }
}

function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function clearGrid() {
  document.querySelectorAll(".grid-cell").forEach(cell => {
    cell.style.backgroundColor = "white";
    cell.dataset.darkness = 0;
  });
}
