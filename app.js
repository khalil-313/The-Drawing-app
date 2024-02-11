const canvas = document.querySelector("canvas");
const brushSizi = document.querySelector("#brush-sizi");
const brushColor = document.querySelector("#color-picker");
const ctx = canvas.getContext("2d");
const eraser = document.querySelector(".eraser");
const brush = document.querySelector(".brush");
const clearBtn = document.querySelector(".clear");
const saveBtn = document.querySelector(".save");

let currentsizi = 2;
let currentColor = "";
let isDarwing = false;
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});
function StartDrraw() {
  isDarwing = true;
  ctx.beginPath();
  ctx.lineWidth = currentsizi;
}
function drawing(e) {
  if (!isDarwing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.strokeStyle = `${currentColor}`;
}
function endDarw() {
  isDarwing = false;
}
canvas.addEventListener("mousedown", StartDrraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", endDarw);

brushSizi.addEventListener("change", () => {
  currentsizi = brushSizi.value;
});
brushColor;

brushColor.addEventListener("change", () => {
  currentColor = brushColor.value;
});
brush.addEventListener("click", () => {
  brush.classList.add("active");
  eraser.classList.remove("active");
  currentColor = brushColor.value;
});
eraser.addEventListener("click", () => {
  eraser.classList.add("active");
  brush.classList.remove("active");
  currentColor = "white";
});
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "white";

  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
saveBtn.addEventListener("click", () => {
  let link = document.createElement("a");
  link.download = "khalil";
  link.href = canvas.toDataURL();
  link.click();
});
