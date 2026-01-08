# 365 Reasons I Love You - Anniversary Website

A romantic, minimalist single-page website celebrating 365 days of love with beautiful flower animations and daily messages.

## 🌸 Features

- **Automatic Day Tracking**: Calculates the current day based on your anniversary start date
- **Beautiful Flower Animations**: 5 different flowers that bloom elegantly before revealing the daily message
  - Days 1-73: Red Rose 🌹
  - Days 74-146: Tulip 🌷
  - Days 147-219: Lavender 💜
  - Days 220-292: Sunflower 🌻
  - Days 293-365: Cherry Blossom 🌸
- **Daily Love Messages**: 365 unique messages (structure provided for easy customization)
- **Soft Pastel Design**: Background colors change to match each flower type
- **Replay Animation**: Watch the flower bloom again with a single click
- **Mobile Responsive**: Beautiful on all devices
- **Floating Particles**: Gentle sparkles create a magical atmosphere

## 🎨 How to Customize

### 1. Change the Anniversary Start Date

Edit `/app/frontend/src/data/messages.js`:

```javascript
export const ANNIVERSARY_START_DATE = '2026-01-16';
```

### 2. Edit Daily Messages

Edit the messages array in `/app/frontend/src/data/messages.js`:

```javascript
export const messages = [
  "Your custom message for day 1",
  "Your custom message for day 2",
  // ... add 365 messages total
];
```

**Tip**: The file currently has 10 personalized messages and placeholder messages. Replace all 365 with your own unique messages!

### 3. Customize Flower Styles

Edit `/app/frontend/src/components/FlowerBloom.jsx` to modify:
- Petal colors (change `fill="#color"` values)
- Petal shapes (adjust the SVG path coordinates)
- Flower sizes (modify `rx`, `ry`, `r` values in the SVG)

### 4. Adjust Background Colors

Edit the `getBackgroundColor()` function in `/app/frontend/src/pages/HomePage.jsx`:

```javascript
case 'rose':
  return 'linear-gradient(135deg, #fff5f7 0%, #ffe5ec 100%)';
// Change these hex colors to your preference
```

### 5. Modify Animation Timing

Edit `/app/frontend/src/components/FlowerBloom.css`:
- Change animation duration in `@keyframes petalBloom`
- Adjust delay values for sequential petal blooming
- Modify the floating animation speed

Edit `/app/frontend/src/pages/HomePage.jsx`:
- Change the timeout values in `startAnimationSequence()` function

## 🚀 Running the Website

### Development Mode

```bash
# Frontend is already running at http://localhost:3000
# No additional setup needed!
```

### Viewing the Website

Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
/app/frontend/src/
├── data/
│   └── messages.js          # Messages and configuration
├── components/
│   ├── FlowerBloom.jsx      # Flower SVG components
│   └── FlowerBloom.css      # Flower animations
├── pages/
│   ├── HomePage.jsx         # Main page logic
│   └── HomePage.css         # Main page styling
└── App.js                   # App router
```

## 🎭 Design Features

- **Typography**: 
  - Playfair Display (elegant serif for headings)
  - Inter (clean sans-serif for body text)
- **Animations**:
  - Flower bloom (2.5 seconds)
  - Message fade-in (0.8 seconds)
  - Gentle floating effect
  - Floating particles
- **Color Palette**: Soft pastels that change based on flower type

## 💡 Tips

1. **Message Writing**: Keep messages between 5-15 words for best visual balance
2. **Testing**: To test different days, temporarily change the `ANNIVERSARY_START_DATE` to a past date
3. **Performance**: The website is optimized with CSS animations (no heavy libraries)
4. **Mobile**: Tested and beautiful on all screen sizes

## 🎨 Color Themes by Flower

- **Rose** (Days 1-73): Soft rose pink, blush tones
- **Tulip** (Days 74-146): Coral, peach, warm tones
- **Lavender** (Days 147-219): Lavender purple, lilac shades
- **Sunflower** (Days 220-292): Soft yellow, cream, warm gold
- **Cherry Blossom** (Days 293-365): Pink sakura, soft cream

## 📝 Current Configuration

- **Start Date**: January 16, 2026
- **Current Day**: Automatically calculated based on today's date
- **Total Messages**: 365 (with placeholder structure provided)

## ❤️ Made with Love

This romantic website was created to celebrate the beautiful journey of love, one day at a time.

---

**Note**: This is a frontend-only website with no backend required. All logic runs in the browser.
