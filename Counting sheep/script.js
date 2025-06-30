let count = 0;
const counterDisplay = document.getElementById('counter');
const sheepElements = document.querySelectorAll('.sheep');
const sound = new Audio('baa.mp3');
let soundEnabled = true;

// Simulate sheep jump count
function incrementCounter() {
  count++;
  counterDisplay.textContent = count;
  if (soundEnabled) {
    sound.currentTime = 0;
    sound.play();
  }
}

sheepElements.forEach((sheep) => {
  sheep.addEventListener('animationiteration', incrementCounter);
});

document.getElementById('sound-on').addEventListener('click', function() {
  soundEnabled = true;
});

document.getElementById('sound-off').addEventListener('click', function() {
  soundEnabled = false;
});
