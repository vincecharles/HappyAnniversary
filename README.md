# Happy Anniversary Celebration - Newspaper Style

A sweet, interactive HTML/CSS/JavaScript project celebrating a 7th anniversary with an old newspaper theme, designed as a romantic gift for your girlfriend.

## Features

- **Newspaper Card Flip**: Click to open the newspaper like opening a real newspaper, revealing your heartfelt message.
- **Sweet Interactions**: 
  - A "No" button that teleports around the screen when you try to click it (making it playfully hard to catch).
  - When you finally click it, a sweet message appears with floating hearts and confetti.
- **Romantic Design**: 
  - Vintage newspaper aesthetic with beige background and classic typography.
  - Sweet pink accents and loving message.
  - Decorative hearts and confetti effects.
- **Image Container**: Ready-to-use container where you can add your favorite photo together.
- **Responsive Design**: Looks great on desktops, tablets, and mobile devices.
- **Sweet Animations**: Smooth page turn, floating hearts, confetti, and teleport effects.

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
   - Replace `assets/images/placeholder-image.png` with your own favorite photo (same name or update the HTML).
   - Add your own newspaper texture to `assets/images/newspaper-texture.jpg` and uncomment the background-image line in `css/styles.css` if desired.
3. **Customize the message** in `index.html`:
   - Replace `[Her Name]` with your girlfriend's name.
   - Replace `[Your Name]` with your name.
   - Adjust the heartfelt message in the content section to your liking.
4. **Open `index.html` in a web browser** to view the anniversary card.

## Customization

### Colors and Fonts
- Edit the CSS variables in `css/styles.css` at the top of the file to change the color scheme.
- Change the font families in the same section (note: we use 'Bradley Hand' for the signature, which may need to be available or replaced with a similar cursive font).

### Animations
- Adjust animation timings and effects in `css/animations.css`.
- Modify the interaction logic in `js/interactions.js` (teleport behavior, sweet message, effects).

### Adding More Elements
- You can add more image containers by duplicating the `.image-container` div in the back face of the card.
- Adjust the layout as needed.

## How It Works

1. **Newspaper Card**: The card starts showing the front (cover). Click anywhere on the card to flip it and reveal the message inside (like opening a newspaper).
2. **Teleport Button**: The "No" button teleports to a random position within the screen when you hover over it (up to 3 times). After that, it stays put so you can click it.
3. **Sweet Message**: When you click the button, it teleports one last time and then displays a sweet message with floating hearts and confetti.
4. **Image Container**: Replace the placeholder image with your own photo by either:
   - Replacing `assets/images/placeholder-image.png` with your image (same name and format), or
   - Changing the `src` attribute in the `<img>` tag in `index.html`.

## Credits

- Design and development by Claude Code.
- Inspired by romantic gestures and the joy of celebrating love.

## License

This project is open source and available for personal use. Feel free to modify and share!

Enjoy celebrating your love!