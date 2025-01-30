const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const response = document.getElementById('response');

noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
  response.textContent = "Yay! I knew it! 💖";
  noButton.style.display = 'none'; // Hide the "No" button
});

noButton.addEventListener('click', () => {
  response.textContent = "Arey yaar, galat button dabaya! 😜";
});