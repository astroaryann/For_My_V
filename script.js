// Get elements
const proposeButton = document.getElementById('proposeButton');
const hiddenMessage = document.getElementById('hiddenMessage');
const finalMessage = document.getElementById('finalMessage');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const whyNotButton = document.getElementById('whyNotButton');
const giveUpButton = document.getElementById('giveUpButton');
const whyNotReasons = document.getElementById('whyNotReasons');
const progressBar = document.getElementById('progressBar');
const progressMessage = document.getElementById('progressMessage');
const funnyMessage = document.getElementById('funnyMessage');
const music = document.getElementById('backgroundMusic');

// Variables
let noCount = 0;
const messages = [
  "Are you sure? Let's think again!",
  "You're making this harder than it needs to be!",
  "Just say yes already!",
  "You can't resist forever!",
  "The button is shy, but so am I!"
];
const gifs = [
  "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
  "https://media.giphy.com/media/l0HlTy9x8FZo0XO1i/giphy.gif",
  "https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif"
];

// Show hidden message when the button is clicked
proposeButton.addEventListener('click', () => {
  proposeButton.style.display = 'none';
  hiddenMessage.style.display = 'block';
});

// Handle "Yes" button click
yesButton.addEventListener('click', () => {
  hiddenMessage.style.display = 'none';
  finalMessage.style.display = 'block';
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  music.play();
});

// Handle "No" button click
noButton.addEventListener('click', () => {
  noCount++;
  const progressWidth = Math.min((noCount / 10) * 100, 100);
  progressBar.style.width = `${progressWidth}%`;
  progressMessage.textContent = messages[noCount % messages.length];

  // Teleport button
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const randomX = Math.random() * (viewportWidth - buttonWidth);
  const randomY = Math.random() * (viewportHeight - buttonHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  // Funny GIF
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  funnyMessage.innerHTML = `<img src="${randomGif}" alt="Funny GIF">`;

  // Confetti
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Show "Give Up" button after 10 clicks
  if (noCount >= 10) {
    giveUpButton.style.display = 'block';
  }
});

// Handle "Why Not?" button click
whyNotButton.addEventListener('click', () => {
  whyNotReasons.style.display = 'block';
});

// Handle "Give Up" button click
giveUpButton.addEventListener('click', () => {
  alert("You win... for now! 😘");
});

// Easter Egg
document.addEventListener('click', (event) => {
  if (event.clientX < 100 && event.clientY < 100) {
    const easterEgg = document.getElementById('easterEgg');
    easterEgg.style.display = 'block';
    setTimeout(() => {
      easterEgg.style.display = 'none';
    }, 2000);
  }
});
