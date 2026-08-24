// Interactions for HappyAnniversary

// Function to initialize all interactions
export function initInteractions() {
  const card = document.querySelector('.card');
  const teleportButton = document.getElementById('teleportButton');
  const sweetMessage = document.getElementById('sweetMessage');

  // Card flip interaction (opening/closing the newspaper)
  if (card) {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  }

  // Teleport button interaction
  if (teleportButton && sweetMessage) {
    let teleportCount = 0;
    const maxTeleports = 3; // After this, stop teleporting on hover

    // Function to teleport the button to a random position within the viewport
    function teleportButton() {
      // Generate random position within viewport (with margins)
      const margin = 50; // Margin from edges
      const x = Math.random() * (window.innerWidth - 2 * margin) + margin;
      const y = Math.random() * (window.innerHeight - 2 * margin) + margin;

      // Apply teleport transformation
      teleportButton.style.setProperty('--tx', `${x - teleportButton.offsetLeft}px`);
      teleportButton.style.setProperty('--ty', `${y - teleportButton.offsetTop}px`);
      teleportButton.classList.add('teleport');

      // Remove the class after animation ends to allow re-triggering
      teleportButton.addEventListener('animationend', () => {
        teleportButton.classList.remove('teleport');
        teleportButton.style.removeProperty('--tx');
        teleportButton.style.removeProperty('--ty');
      }, { once: true });
    }

    // Hover event: teleport button to make it hard to click
    teleportButton.addEventListener('mouseenter', () => {
      if (teleportCount < maxTeleports) {
        teleportButton();
        teleportCount++;
      }
    });

    // Click event: teleport button and show sweet message
    teleportButton.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent any form submission
      teleportButton(); // Teleport the button
      showSweetMessage(); // Show the sweet message
    });
  }

  // Function to show the sweet message with effects
  function showSweetMessage() {
    sweetMessage.classList.add('show');
    // Create floating hearts effect
    createFloatingHearts();
    // Optional: play a sound or create confetti
    createConfetti();
  }

  // Function to create floating hearts
  function createFloatingHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'hearts-container';
    heartsContainer.style.position = 'fixed';
    heartsContainer.style.top = '0';
    heartsContainer.style.left = '0';
    heartsContainer.style.width = '100%';
    heartsContainer.style.height = '100%';
    heartsContainer.style.pointerEvents = 'none';
    heartsContainer.style.zIndex = '1000';
    document.body.appendChild(heartsContainer);

    // Create multiple hearts
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤️';
      heart.style.position = 'absolute';
      heart.style.fontSize = `${Math.random() * 20 + 20}px`; // 20-40px
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.bottom = '-10%'; // Start below the viewport
      heart.style.opacity = '0.8';
      heart.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';

      // Random animation duration and delay
      const duration = Math.random() * 3 + 2; // 2-5 seconds
      const delay = Math.random() * 2; // 0-2 seconds

      heart.style.animation = `floatHearts ${duration}s ease-out ${delay}s forwards`;

      heartsContainer.appendChild(heart);

      // Remove heart after animation ends
      heart.addEventListener('animationend', () => {
        heart.remove();
        // Remove container if no more hearts
        if (heartsContainer.children.length === 0) {
          heartsContainer.remove();
        }
      });
    }
  }

  // Function to create confetti effect
  function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '999';
    document.body.appendChild(confettiContainer);

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9900', '#9900ff'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.position = 'absolute';
      confetti.style.width = '6px';
      confetti.style.height = '6px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.opacity = '0.8';
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

      // Random starting position at the top
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = `${Math.random() * -20}vh`; // Start above the viewport

      // Random animation duration and delay
      const duration = Math.random() * 3 + 2; // 2-5 seconds
      const delay = Math.random() * 2; // 0-2 seconds

      confetti.style.animation = `confettiFall ${duration}s ease-out ${delay}s forwards`;

      confettiContainer.appendChild(confetti);

      // Remove confetti after animation ends
      confetti.addEventListener('animationend', () => {
        confetti.remove();
        // Remove container if no more confetti
        if (confettiContainer.children.length === 0) {
          confettiContainer.remove();
        }
      });
    }
  }
}