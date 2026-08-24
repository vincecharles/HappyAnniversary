// Interactions for HappyAnniversary

// Function to initialize all interactions
export function initInteractions() {
  // Handle the "no" button fleeing
  const noButton = document.getElementById('noButton');
  if (noButton) {
    noButton.addEventListener('mouseenter', () => {
      // Make the button flee by setting a random translation
      const randomX = (Math.random() - 0.5) * 200; // -100 to 100
      const randomY = (Math.random() - 0.5) * 200; // -100 to 100
      noButton.style.setProperty('--tx', `${randomX}px`);
      noButton.style.setProperty('--ty', `${randomY}px`);
      noButton.style.setProperty('--tr', `${Math.random() * 360}deg`);
      noButton.classList.add('float-away');

      // After the animation ends, reset the button position and remove the class
      noButton.addEventListener('animationend', () => {
        noButton.classList.remove('float-away');
        // Reset the button to a new random position? Or we can just leave it and let the next hover set new values.
        // We'll remove the inline styles so that the next hover sets new ones.
        noButton.style.removeProperty('--tx');
        noButton.style.removeProperty('--ty');
        noButton.style.removeProperty('--tr');
      }, { once: true });
    });

    // Also, if clicked, we can show a message and prevent the flee? Or let it flee and then show a message.
    // Let's make it so that if clicked, it flees and then we show a message.
    noButton.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent any form submission if inside a form
      // Trigger the flee animation
      const randomX = (Math.random() - 0.5) * 300;
      const randomY = (Math.random() - 0.5) * 300;
      noButton.style.setProperty('--tx', `${randomX}px`);
      noButton.style.setProperty('--ty', `${randomY}px`);
      noButton.style.setProperty('--tr', `${Math.random() * 360}deg`);
      noButton.classList.add('float-away');

      // After the animation, show a message
      noButton.addEventListener('animationend', () => {
        // Create a message element
        const message = document.createElement('div');
        message.textContent = 'Hehe, you can\'t say no to celebration!';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'rgba(0,0,0,0.7)';
        message.style.color = '#fff';
        message.style.padding = '1rem';
        message.style.borderRadius = '10px';
        message.style.zIndex = '1000';
        document.body.appendChild(message);

        // Remove the message after 2 seconds
        setTimeout(() => {
          message.remove();
        }, 2000);

        // Reset the button
        noButton.classList.remove('float-away');
        noButton.style.removeProperty('--tx');
        noButton.style.removeProperty('--ty');
        noButton.style.removeProperty('--tr');
      }, { once: true });
    });
  }

  // Add hover effects to image containers (already handled by CSS, but we can add JS for more complex interactions if needed)
  // For now, we rely on CSS for hover effects.

  // Easter egg: Konami code for confetti
  let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        // Konami code entered! Trigger confetti
        triggerConfetti();
        konamiIndex = 0; // Reset for next time
      }
    } else {
      konamiIndex = 0; // Reset if wrong key
    }
  });

  // Function to trigger confetti (we'll create a simple confetti effect)
  function triggerConfetti() {
    const confettiCount = 100;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(confettiCount * particleRatio)
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55
    });
    fire(0.2, {
      spread: 60
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  // We need to include a confetti library or create our own. Since we don't want to rely on external libraries,
  // we'll create a simple confetti effect using divs. However, for simplicity and to avoid reinventing the wheel,
  // we can use a small confetti function. Let's create a basic confetti effect.

  // Alternatively, we can use the canvas-confetti library via a CDN, but the user might not have internet.
  // Since the task is to make it self-contained, let's create a simple confetti function.

  // We'll create a simple confetti effect by creating and animating many small divs.
  // However, note that the plan says to use industry-standard animations, and we are allowed to use Web Animations API.

  // Let's define a function that creates confetti using DOM elements and CSS animations.
  // We'll use the @keyframes confettiFall defined in animations.css.

  // We'll create a function that generates confetti pieces.
  function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9900', '#9900ff'];
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = '8px';
      confetti.style.height = '8px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.opacity = '0.8';
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

      // Random starting position within the viewport
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = `${Math.random() * -20}vh`; // Start above the viewport

      // Random animation duration and delay
      const duration = Math.random() * 3 + 2; // 2-5 seconds
      const delay = Math.random() * 2; // 0-2 seconds

      confetti.style.animation = `confettiFall ${duration}s ease-out ${delay}s forwards`;

      confettiContainer.appendChild(confetti);

      // Remove the confetti element after the animation ends
      confetti.addEventListener('animationend', () => {
        confetti.remove();
        // If no more confetti elements, remove the container
        if (confettiContainer.children.length === 0) {
          confettiContainer.remove();
        }
      });
    }
  }

  // Replace the triggerConfetti function to use our own confetti
  window.triggerConfetti = createConfetti;
}

// We'll export the triggerConfetti function if needed, but for now we attach it to window.