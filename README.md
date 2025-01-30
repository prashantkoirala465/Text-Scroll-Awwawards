# Text Gradient Scroll Opacity Effect

A stunning text animation demo inspired by award-winning websites, featuring a smooth scroll-based opacity transition effect. This project demonstrates how to create an engaging text reveal animation that responds to user scroll, similar to effects seen on websites like [matvoyce.tv](https://matvoyce.tv/) and [thirtysixstudio.com](https://thirtysixstudio.com/).

## Features

- Smooth text reveal animation on scroll
- Character-by-character opacity transition
- Responsive design
- Custom font integration
- Performant scroll-based animations using Framer Motion
- Modern React implementation with Next.js

## Demo Preview

As you scroll down the page, each character of the text gradually fades in, creating an elegant and engaging visual effect. The animation is precisely controlled by the scroll position, allowing users to control the reveal speed through their scroll behavior.

## Technologies Used

- **Next.js 14.0.3** - React framework for production
- **React 18** - JavaScript library for building user interfaces
- **Framer Motion** - Animation library for React
- **SASS** - CSS preprocessor for styling
- **Custom Font** - ClashDisplay Bold for typography

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles and font declarations
│   ├── layout.js       # Root layout component
│   └── page.js         # Main page component with demo text
├── components/
│   ├── Character.jsx   # Core animation component
│   └── style.module.scss # Component-specific styles
```

## Implementation Details

### Core Animation Logic

The text animation is implemented through three main components working together:

1. **Paragraph Component**
   - Splits the text into words
   - Manages scroll progress tracking
   - Calculates animation ranges for each word

2. **Word Component**
   - Splits words into individual characters
   - Calculates precise animation timing for each character

3. **Char Component**
   - Handles the actual opacity animation
   - Uses Framer Motion's useTransform for smooth transitions

### Key Code Snippets

#### Scroll Progress Tracking
```javascript
const { scrollYProgress } = useScroll({
  target: container,
  offset: ["start 0.9", "start 0.25"]
})
```

#### Character Animation
```javascript
const opacity = useTransform(progress, range, [0,1])
return (
  <span>
    <span className={styles.shadow}>{children}</span>
    <motion.span style={{opacity: opacity}}>{children}</motion.span>
  </span>
)
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/prashantkoirala465/Text-Scroll-Awwawards
   cd text-scroll-awwawards
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Modifying the Text
Edit the paragraph constant in `src/app/page.js`:
```javascript
const paragraph = "Your custom text here"
```

### Adjusting Animation Parameters

1. **Scroll Trigger Points**
   In `Character.jsx`, modify the offset values:
   ```javascript
   offset: ["start 0.9", "start 0.25"]
   ```

2. **Text Styling**
   Update the SCSS variables in `style.module.scss`:
   ```scss
   .paragraph {
     font-size: 60px;  // Adjust text size
     line-height: 1;   // Modify line height
     padding: 40px;    // Change padding
   }
   ```

### Font Customization
Replace the font file in `public/` directory and update the font-face declaration in `globals.css`:
```css
@font-face {
  font-family: 'Main';
  src: url('../../public/YourFont.otf');
}
```

## Performance Considerations

- Uses Framer Motion's optimized animation system
- Implements efficient scroll-based tracking
- Minimizes re-renders through proper component structure
- Utilizes CSS modules for scoped styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by award-winning websites on Awwwards
- Built with modern web technologies
- Special thanks to the Framer Motion team for their excellent animation library

## Author

Prashant Koirala
Contact: prashantkoirala465@gmail.com

## Support

If you have any questions or run into issues, please open an issue in the repository.
