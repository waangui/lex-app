import React from 'react';
import { Link } from 'react-router-dom';
import useDictionaryStore from '../store/DictionaryStore.js';
import './About.css';

function About() {
  const resetSearch = useDictionaryStore((state) => state.resetSearch);

  return (
    <div className='about-container'>
      <h2 >About LEX Dictionary</h2>
      <p>
        This dictionary app is a simple and fast tool designed to help you look up word definitions instantly. It was created by Wangui Githua as a capstone project for the ALX Front-End development course.
      </p>
      <p>
        The application is built with React, Vite and vanilla CSS for the build tooling, and Zustand for lightweight state management. It fetches all its data from the free and open-source{' '}
        <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer">Free Dictionary API</a>.
      </p>
      <div style={{ textAlign: 'center' }}>
         {/* This Link component navigates back to the root path ("/") */}
         <Link to="/" className='back-button' onClick={resetSearch}>
            Back to Search
         </Link>
      </div>
    </div>
  );
}

export default About;

