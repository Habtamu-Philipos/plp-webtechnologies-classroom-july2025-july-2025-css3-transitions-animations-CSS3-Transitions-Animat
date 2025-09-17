// ===== Part 2: JavaScript Functions =====

// Function with parameters + return value
function calculateArea(width, height) {
  return width * height;
}

// Global variable
let globalMessage = "Hello from global scope!";

function showScopeDemo() {
  let localMessage = "Hello from local scope!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // accessible only here
}
showScopeDemo();

// Reusable function for toggling animations
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

// ===== Part 3: Combining CSS + JS =====

// Animate box on button click
const box = document.getElementById("animateBox");
const animateBtn = document.getElementById("animateBtn");
animateBtn.addEventListener("click", () => {
  toggleAnimation(box, "animate");
  console.log("Box area:", calculateArea(100, 100)); // demo function reuse
});

// Modal functionality
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
