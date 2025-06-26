# Blockly Assignment Portfolio

A modern, responsive personal portfolio web app built with **React** and **Vite**. This project showcases a UI/UX designer and front-end developer, featuring a clean design, theme toggling, and smooth navigation.

## Features

- ⚡ **Fast Development**: Powered by Vite for instant reloads and builds
- 🎨 **Modern UI**: Responsive layout with Bootstrap 5 and custom SVG assets
- 🌗 **Theme Toggle**: Switch between light and dark modes
- 🧭 **Routing**: Client-side navigation with React Router v7
- 👤 **Profile & About**: Dedicated sections for introduction and background
- 🔗 **Social Links**: Custom SVG icons for major social platforms
- ❌ **404 Page**: Friendly Not Found page for invalid routes

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Project Structure

```
blockly-assignment/
├── public/           # Static assets
├── src/
│   ├── assets/       # SVGs and images
│   ├── components/   # React components (Home, About, Navbar, etc.)
│   ├── App.jsx       # Main app with routing and theme logic
│   └── main.jsx      # React entry point
├── index.html        # HTML entry point
├── package.json      # Project metadata and scripts
└── ...
```

## Customization

- Update profile info and social links in `src/components/Home.jsx`, `About.jsx`, and `SocialIcons.jsx`.
- Replace SVGs in `src/assets/` for your own branding.

---

Built with ❤️ using React, Vite, and Bootstrap.
