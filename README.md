# 📖 LEX Dictionary Web App

LEX is a clean, simple, and fast dictionary web application built as a front-end development capstone project. It allows users to search for English word definitions, view phonetic spellings, parts of speech, and origins in a beautifully styled interface.

## 📋 Project Description
This application was created to demonstrate core front-end development skills using a modern tech stack. The primary goal was to build an application that interacts with a third-party API to fetch and display data dynamically. The focus was on creating a clean user interface, managing application state efficiently, and handling user interactions smoothly.

## ✨ Features
- Word Search: 🔍 Instantly search for any English word.
- Detailed Definitions: 📚 View definitions, parts of speech, phonetic spelling, example sentences, and word origins.
- Responsive Design: 📱 The application is designed to be usable across different screen sizes.
- Client-Side Routing: 🛤️ A separate "About" page is included, managed by React Router.
- State Management: 🧠 App state (like search results, loading, and errors) is handled efficiently with Zustand.
- Clean UI: 🎨 A minimalist design inspired by the user's prototype, focusing on readability and ease of use.

## 🚀 Tech Stack
1. Framework: React (via Vite)
2. State Management: Zustand
3. Routing: React Router DOM
4. Styling: Vanilla CSS with Custom Properties (CSS Variables)
5. API Requests: Axios
6. Icons: Lucide-React
7. API: Free Dictionary API (https://dictionaryapi.dev)

## ⚠️ Limitations or Known Issues
* **API Inconsistency:** The Free Dictionary API is fantastic, but it can sometimes return data in inconsistent formats. For some words, certain fields (like phonetics or origin) may be missing. The app has been built to handle these cases gracefully without crashing.
* **Language Support:** The application currently only supports searches for English words.
* **Complex Words:** Very obscure or technical terms may not be found in the API's database.

## 💡 What's Next (Future Features)
* **Audio Pronunciation:** Integrate the audio files provided by the API to allow users to hear how words are pronounced.
* **Thesaurus Integration:** Add a feature to look up synonyms and antonyms for a searched word.
* **Expanded Word Origins:** Provide a more detailed and interactive exploration of word etymology.

## ⚙️ Installation & Running the Project
To get a local copy up and running, follow these simple steps.

### Prerequisites
You must have Node.js (which includes npm) installed on your machine.

### Installation
Clone the repository:
`git clone [https://github.com/your-username/lex-app.git](https://github.com/your-username/lex-app.git)`


Navigate into the project directory:
```
cd lex-app
```

Install NPM packages:
```
npm install
```

Running the App
Start the development server:
```
npm run dev
```

Open your browser and navigate to the local server address provided in the terminal (usually http://localhost:5173).


