import React, { useState } from 'react';
import useDictionaryStore from "../store/DictionaryStore.js";

// SearchBar Component: Handles user input and triggers the search
function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  // fetchWord function from our Zustand store
  const fetchWord = useDictionaryStore((state) => state.fetchWord);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      fetchWord(inputValue.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="search for a word..."
        style={{ width: '300px', padding: '10px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;

