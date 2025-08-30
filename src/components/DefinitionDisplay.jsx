import React from "react";
import useDictionaryStore from "../store/DictionaryStore.js";

// DefinitionDisplay Component: Shows the results, loading state, or error message
function DefinitionDisplay() {
  // We get the data, loading state, and error from our Zustand store
  const { wordData, isLoading, error } = useDictionaryStore();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!wordData) {
    return <p>Enter a word to get started.</p>;
  }

  // Find the first available phonetic text
  const phonetic = wordData.phonetics.find(p => p.text)?.text;

  return (
    <div>
      {/* Word and Phonetic Spelling */}
      <h1>{wordData.word}</h1>
      {phonetic && <p>{phonetic}</p>}

      {/* Meanings and Definitions */}
      {wordData.meanings.map((meaning, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{meaning.partOfSpeech}</h3>
          <ul>
            {meaning.definitions.map((def, i) => (
              <li key={i}>
                <p><strong>Definition:</strong> {def.definition}</p>
                {def.example && <p><em>Example: "{def.example}"</em></p>}
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

