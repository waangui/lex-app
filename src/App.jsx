import React , { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import SearchBar from './components/SearchBar'
import DefinitionDisplay from './components/DefinitionDisplay'
import About from './components/About';
import useDictionaryStore from './store/dictionaryStore.js';
import './App.css';


// Main App Component: Assembles the other components
function App() {
  // to reset the search page
  const resetSearch = useDictionaryStore((state) => state.resetSearch);

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
        <Link to="/" onClick={resetSearch} className="header-link">
          <div className="header-content">
            {/* Use the BookOpen icon component here */}
            <BookOpen className="logo" />
            <h1 className='app-title'>LEX Dictionary</h1>
          </div>
        </Link>
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

