import React , { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import "./App.css"
import SearchBar from './components/SearchBar'
import DefinitionDisplay from './components/DefinitionDisplay'
import About from './components/About';



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
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>LEX Dictionary</h1>
      </header>
      <main style={{ flex: '1' }}>
        {/* Routes define the different "pages" of your application */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
        <p> © Lex Dictionary 2025</p>
        {/* This Link component will navigate to the /about route */}
        <Link to="/about" style={{ textDecoration: 'none', color: '#333', cursor: 'pointer' }}>About</Link>
      </footer>
    </div>
  );
}

export default App;

