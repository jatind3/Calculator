React + Vite

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules.

Plugins

Currently, two official plugins are available for React development with Vite:

@vitejs/plugin-react: Uses Babel for Fast Refresh.

@vitejs/plugin-react-swc: Uses SWC for Fast Refresh, offering better performance.

Getting Started

Installation

To create a new project using this template, run:

npx create-vite@latest my-app --template react

Then, navigate to your project directory:

cd my-app

Install dependencies:

npm install

Development

Start the development server with:

npm run dev

This will start Vite's dev server with HMR enabled.

Building for Production

To build the project for production, run:

npm run build

This will generate the optimized files in the dist/ directory.

Preview Production Build

After building, you can preview the production build locally with:

npm run preview

Features

🚀 Fast Refresh: Instant feedback while developing.

⚡ Lightning Fast Builds: Thanks to Vite's native ESM support.

📦 Optimized Production Build: Pre-optimized output for deployment.

📏 ESLint Integration: Helps maintain code quality.