import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    marginTop: '20px',
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <div style={{ padding: '0 20px' }}>
      <h2 style={{ textAlign: 'center' }}>About LEX Dictionary</h2>
      <p>
        This dictionary app is a simple and fast tool designed to help you look up word definitions instantly. It was created as a capstone project for a front-end development course.
      </p>
      <p>
        The application is built with modern web technologies including React, Vite for the build tooling, and Zustand for lightweight state management. It fetches all its data from the free and open-source{' '}
        <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer">Free Dictionary API</a>.
      </p>
      <div style={{ textAlign: 'center' }}>
         {/* This Link component navigates back to the root path ("/") */}
         <Link to="/" style={buttonStyle}>
            Back to Search
         </Link>
      </div>
    </div>
  );
}

export default About;

