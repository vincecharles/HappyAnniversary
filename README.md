# Happy Anniversary Celebration

A beautiful, interactive HTML/CSS/JavaScript project celebrating a 7th anniversary with an old newspaper theme.

## Features

- **Old newspaper design**: Aged paper texture, vintage typography, and classic layout.
- **Industry-standard animations**: Smooth entrance animations, floating elements, and hover effects.
- **Image/Video containers**: Ready-to-use containers where you can easily add your own images or videos.
- **Funny interactions**: 
  - A "No" button that flees when you try to click it.
  - Konami code Easter egg that triggers confetti.
  - Hover surprises on image containers.
- **Responsive design**: Looks great on desktops, tablets, and mobile devices.
- **Lightbox functionality**: Click on images to view them in a full-screen lightbox.

## Folder Structure

```
HappyAnniversary/
├── index.html
├── css/
│   ├── styles.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── interactions.js
│   └── animations.js
├── assets/
│   ├── images/
│   │   ├── newspaper-texture.jpg (optional)
│   │   └── placeholder-image.png
│   ├── videos/
│   │   └── placeholder-video.mp4 (optional)
│   └── audio/
│       └── background-music.mp3 (optional)
└── README.md
```

## How to Use

1. **Clone or download** this repository.
2. **Replace placeholder media**:
   - Replace `assets/images/placeholder-image.png` with your own images (same name or update the HTML).
   - Add your own newspaper texture to `assets/images/newspaper-texture.jpg` and uncomment the background-image line in `css/styles.css`.
   - Add videos to the `assets/videos/` folder and update the HTML to use `<video>` tags instead of `<img>` if desired.
3. **Customize text and content** in `index.html` to match your anniversary celebration.
4. **Open `index.html` in a web browser** to view the celebration.

## Customization

### Colors and Fonts
- Edit the CSS variables in `css/styles.css` at the top of the file to change the color scheme.
- Change the font families in the same section.

### Animations
- Adjust animation timings and effects in `css/animations.css`.
- Modify the interaction logic in `js/interactions.js` and `js/animations.js`.

### Adding More Image Containers
- Copy a `.image-container` div in the `.content` section of `index.html` and update the image source and caption.

## Credits

- Design and development by Claude Code.
- Inspired by classic newspaper layouts and modern web interactions.

## License

This project is open source and available for personal use. Feel free to modify and share!

Enjoy your celebration!