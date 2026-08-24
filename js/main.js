// Main entry point for the HappyAnniversary project
import { initInteractions } from './interactions.js';
import { initAnimations } from './animations.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize interactions (button events, etc.)
  initInteractions();

  // Initialize animations (entrance animations, etc.)
  initAnimations();

  // Optional: Add any global event listeners or setup here
});