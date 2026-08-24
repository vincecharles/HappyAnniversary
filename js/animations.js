// Animations for HappyAnniversary

// Function to initialize animations
export function initAnimations() {
  // Add entrance animations to elements on load
  addEntranceAnimations();

  // Initialize lightbox for image containers (if needed, but we can keep it simple)
  // initLightbox(); // We'll skip lightbox for now to keep it simple, but we can add if needed.

  // Optional: Add any background animations or other effects
}

// Function to add entrance animations to elements
function addEntranceAnimations() {
  // We'll animate the newspaper container to scale in and the card to fade in
  const newspaper = document.querySelector('.newspaper');
  const card = document.querySelector('.card');

  if (newspaper) {
    newspaper.style.opacity = '0';
    newspaper.style.transform = 'scale(0.8)';
    // Trigger reflow to enable transition
    void newspaper.offsetWidth;
    newspaper.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    newspaper.style.opacity = '1';
    newspaper.style.transform = 'scale(1)';
  }

  if (card) {
    // We'll delay the card animation slightly
    setTimeout(() => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      // Trigger reflow
      void card.offsetWidth;
      card.style.transition = 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100);
  }

  // Animate the content inside the card (header, content, footer) to fade in up
  const fronts = document.querySelectorAll('.card-face.front > *');
  fronts.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    // Trigger reflow
    void element.offsetWidth;
    element.style.transition = `opacity 0.5s ease-out ${index * 0.05}s, transform 0.5s ease-out ${index * 0.05}s`;
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  });

  // Animate the back face similarly (if needed, but it's hidden initially)
  // We can animate it when the card is flipped, but for simplicity, we'll just animate on load for the front.
}

// Function to initialize lightbox for image containers (optional)
// We'll keep it simple and not use a lightbox for now, but we can add if the user wants.
// For now, we'll just leave the image as is.

// Optional: Add a subtle moving background texture if desired (not needed for this design)
function initBackgroundAnimation() {
  // We might add a subtle animation to the newspaper background if we had a texture image.
  // Since we are using a solid color, we can skip or add a very subtle animated pattern.
  // For now, we do nothing.
}

// Call background animation if needed
// initBackgroundAnimation();