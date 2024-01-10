
let chessContainer = document.getElementById("chessContainer");

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    const box = document.createElement("div");
    (i + j) % 2 === 0?box.style.backgroundColor = "black":box.style.backgroundColor = "white";
    chessContainer.appendChild(box);
  }
}
