// Animations for HappyAnniversary

// Function to initialize animations
export function initAnimations() {
  // Add entrance animations to elements on load
  addEntranceAnimations();

  // Initialize lightbox for image containers
  initLightbox();

  // Optional: Add any background animations or other effects
}

// Function to add entrance animations to elements
function addEntranceAnimations() {
  // We'll use the Intersection Observer API to animate elements as they enter the viewport
  // For simplicity, we'll just animate on load with a delay for certain elements.

  // Hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(30px)';
    // Trigger reflow to enable transition
    void hero.offsetWidth;
    hero.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }

  // Message section
  const message = document.querySelector('.message');
  if (message) {
    message.style.opacity = '0';
    message.style.transform = 'translateY(30px)';
    // Trigger reflow
    void message.offsetWidth;
    message.style.transition = 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s';
    message.style.opacity = '1';
    message.style.transform = 'translateY(0)';
  }

  // Image containers - we'll stagger them
  const imageContainers = document.querySelectorAll('.image-container');
  imageContainers.forEach((container, index) => {
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    // Trigger reflow
    void container.offsetWidth;
    container.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  });
}

// Function to initialize lightbox for image containers
function initLightbox() {
  // Create lightbox elements
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.display = 'none';
  lightbox.style.position = 'fixed';
  lightbox.style.top = '0';
  lightbox.style.left = '0';
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
  lightbox.style.justifyContent = 'center';
  lightbox.style.alignItems = 'center';
  lightbox.style.zIndex = '1000';
  lightbox.style.cursor = 'pointer';

  const lightboxContent = document.createElement('div');
  lightboxContent.style.position = 'relative';
  lightboxContent.style.maxWidth = '90%';
  lightboxContent.style.maxHeight = '90%';

  // Close button
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '10px';
  closeBtn.style.right = '15px';
  closeBtn.style.color = '#fff';
  closeBtn.style.fontSize = '2rem';
  closeBtn.style.cursor = 'pointer';

  // Media container (img or video)
  const media = document.createElement('div');
  media.style.width = '100%';
  media.style.height = '100%';
  media.style.objectFit = 'contain';

  lightboxContent.appendChild(closeBtn);
  lightboxContent.appendChild(media);
  lightbox.appendChild(lightboxContent);
  document.body.appendChild(lightbox);

  // Get all image containers
  const containers = document.querySelectorAll('.image-container');

  containers.forEach(container => {
    container.addEventListener('click', () => {
      // Get the image or video source
      const img = container.querySelector('img');
      const video = container.querySelector('video');

      // Clear previous content
      media.innerHTML = '';

      if (img) {
        const cloneImg = img.cloneNode();
        cloneImg.style.maxWidth = '100%';
        cloneImg.style.maxHeight = '100%';
        media.appendChild(cloneImg);
      } else if (video) {
        const cloneVideo = video.cloneNode();
        cloneVideo.controls = true;
        cloneVideo.style.maxWidth = '100%';
        cloneVideo.style.maxHeight = '100%';
        media.appendChild(cloneVideo);
      }

      // Show lightbox
      lightbox.style.display = 'flex';
      // Enable scrolling lock on body
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox when clicking on the background or close button
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Close lightbox with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// Optional: Add a subtle moving background texture if desired
function initBackgroundAnimation() {
  const newspaperBg = document.querySelector('.newspaper-background');
  if (newspaperBg) {
    newspaperBg.classList.add('moving-texture');
  }
}

// Call background animation if needed
// initBackgroundAnimation();