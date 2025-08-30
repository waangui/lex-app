import React from "react";
import useDictionaryStore from "../store/DictionaryStore.js";
import './DefinitionDisplay.css';

// DefinitionDisplay Component: Shows the results, loading state, or error message
function DefinitionDisplay() {
  // We get the data, loading state, and error from our Zustand store
  const { wordData, Loading, error } = useDictionaryStore();

  if (Loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!wordData) {
    return <p className="place-holder">Enter a word to get started.</p>;
  }

  // Find the first available phonetic text
  const phonetic = wordData.phonetics.find(p => p.text)?.text;

  

  return (
    <div className="definition-container">
      {/* Word and Phonetic Spelling */}
      <h1 className="word-header">{wordData.word}</h1>
      {phonetic && <p className="phonetic">{phonetic}</p>}

      {/* Meanings and Definitions */}
      {wordData.meanings.map((meaning, index) => (
        <div className="meaning-block" key={index} style={{ marginBottom: '20px' }}>
          <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>
          <ul className="definition-list">
            {meaning.definitions.map((def, i) => (
              <li key={i}>
                <p>{def.definition}</p>
                {def.example && <p className="example"><em>Example: "{def.example}"</em></p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      {/* Origin */}
      {wordData.origin && (
        <div>
          <h4>Origin</h4>
          <p>{wordData.origin}</p>
        </div>
      )}
    </div>
  );
}

export default DefinitionDisplay;

