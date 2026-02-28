# Nexafizz

Nexafizz is a modern, interactive product showcase web application. Built with React, Vite, Tailwind CSS (v4), and Framer Motion, it features dynamic scroll animations, theme switching, and engaging interactive elements perfectly suited for marketing and product presentation.

## Features

- **Interactive Animations**: Powered by Framer Motion, delivering smooth scrolling and engaging reveal effects.
- **Dynamic Theming**: Interactive color and style switching for different product lines.
- **Responsive Layout**: Fully adaptive and mobile-responsive UI components.
- **Production-Ready**: Configured for optimized chunking, minified production builds, and stripped debug logs.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. Clone this repository and navigate into the project directory:
   ```bash
   git clone <repository-url>
   cd NEXAFIZZ
   ```

2. Install the application dependencies:
   ```bash
   npm install
   ```

### Development Server

To start the local development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Production Build

To create an optimized, production-ready bundle:

```bash
npm run build
```

This operation types-checks your code using TypeScript and builds the React application into the `dist/` directory using Vite. All development artifacts, console logs, and debug symbols are automatically removed and vendor chunks are separated.

## Technologies

- **[React](https://react.dev/) 19** - UI Library
- **[Vite](https://vitejs.dev/)** - Frontend Build Tool
- **[Tailwind CSS](https://tailwindcss.com/) 4** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **TypeScript** - Strongly typed JavaScript
