
# Chatbot Monorepo

This repository contains a React-based chatbot application. The main project is located in the `chatbot-project` subfolder.

## Structure

- `chatbot-project/` — Main React chatbot app (Vite, React, custom components)
	- `src/`
		- `components/` — Chat UI components (ChatInput, ChatMessages, etc.)
		- `assets/` — Images for user and robot profiles
		- `App.jsx`, `main.jsx`, `App.css`, etc.
	- `public/` — Static files (e.g., icons)
	- `index.html` — Main HTML file for Vite
	- `package.json`, `vite.config.js`, `eslint.config.js` — Project configuration
	- `test/` — (Currently empty) for future tests

## Features
- Chat interface with user and bot messages
- Automatic scrolling to latest message
- Simple bot responses using the `supersimpledev` package
- Modern React (functional components, hooks)

## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
	 ```sh
	 git clone https://github.com/berkguzeyer/chatbot.git
	 cd chatbot/chatbot-project
	 ```
2. Install dependencies:
	 ```sh
	 npm install
	 ```

### Running the App
Start the development server:
```sh
npm run dev
```
Open the URL shown in your terminal (usually http://localhost:5173).

### Building for Production
```sh
npm run build
```

### Linting
```sh
npm run lint
```

## Main Dependencies
- React
- Vite
- supersimpledev (for chatbot responses)

## License
MIT
