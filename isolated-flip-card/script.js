// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const flipCard = document.getElementById('flipCard');

  // Toggle flip state on click
  flipCard.addEventListener('click', () => {
    flipCard.classList.toggle('flipped');
  });

  // Optional: Click outside to close (uncomment if desired)
  /*
  document.addEventListener('click', (e) => {
    if (!flipCard.contains(e.target) && !e.target.closest('.flip-wrapper')) {
      flipCard.classList.remove('flipped');
    }
  });
  */
});