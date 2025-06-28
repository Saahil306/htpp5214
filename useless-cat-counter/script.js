// Initialize the counter variable to 0
let count = 0;

// This function increases the counter by 1 and updates the display
function increment() {
  count = count + 1; // Increment the counter
  document.getElementById("counter").innerText = count; // Update the counter display in the HTML
}
