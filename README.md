# 🎮 2048 Game Collection

A multi-theme 2048 game collection featuring holiday themes and personalized color selection functionality.

## ✨ New Feature: Personalized Color Themes

### 🎨 Color Picker

- **24 beautiful colors**: From warm reds to fresh teals, satisfying different user preferences
- **Real-time preview**: Game area and icons update immediately after color selection
- **Smart gradient**: Automatically adjusts color depth and transparency based on tile values
- **Smooth animation**: All color changes have fluid transition effects

### 🎯 Feature Highlights

- **Game area color change**: The entire game board uses the selected color as background
- **Icon background gradient**: Each icon uses different transparency of the selected color as background
- **Smart tile colors**: Game tiles use different shades of the selected color based on their values
- **Responsive design**: Good display performance on different devices

## 🎮 Game Themes

### 🧁 Cupcakes Theme

- The most delicious version of 2048
- **Includes new color selection feature**
- Dessert-themed icons and colors

### 🎄 Christmas Theme

- Holiday-themed puzzle fun
- Christmas elements and festive atmosphere

### 🎃 Halloween Theme

- Spooky Halloween puzzle adventure
- Ghost and pumpkin elements

## 🚀 Quick Start

1. **Clone the project**

```bash
git clone <repository-url>
cd playing2048
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Access the game**

- Open browser and visit `http://localhost:3000`
- Select "Cupcakes" theme to experience color selection feature
- Choose your favorite color below the icon legend section

## 🎨 Color Selection Guide

1. **Enter the game**: Select Cupcakes theme
2. **Find the color picker**: Below the icon legend section
3. **Select a color**: Click on any color circle
4. **Observe changes**: Game area and icon backgrounds update immediately
5. **Enjoy the game**: Play with your favorite color theme

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **React Hooks** - State management

## 📱 Responsive Design

- Desktop: Complete color picker and game experience
- Tablet: Optimized layout and touch interaction
- Mobile: Simplified interface and gesture operation

## 🎯 User Experience Optimization

- **Visual consistency**: Game area and icons use the same color theme
- **Intuitive operation**: Color picker is prominently placed and easy to use
- **Instant feedback**: Color changes take effect immediately, no refresh needed
- **Personalization**: Each user can choose their favorite color

## 🔧 Custom Colors

If you want to add more color options, you can modify the `colorOptions` array in `src/components/game/GameTileLegend.tsx`:

```typescript
const colorOptions = [
  "#FF6B6B", // Red
  "#4ECDC4", // Teal
  // Add more colors...
];
```

## 📄 License

MIT License

## 🤝 Contributing

Welcome to submit Issues and Pull Requests!

---

Enjoy your personalized 2048 game experience! 🎮🎨
