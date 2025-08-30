import React , { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import DefinitionDisplay from './components/DefinitionDisplay'
import About from './components/About';
import './App.css';



// Main App Component: Assembles the other components
function App() {

  // A simple component to group the home page content
  const HomePage = () => (
      <>
      <SearchBar />
      <div style={{ marginTop: '40px' }}>
        <DefinitionDisplay />
      </div>
    </>
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>LEX Dictionary</h1>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>© Lex Dictionary 2025</p>
        <Link to="/about">About</Link>
      </footer>
    </div>
  );
}

export default App;

