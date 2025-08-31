import React from "react";
import useDictionaryStore from "../store/dictionaryStore.js";
import './DefinitionDisplay.css';


// DefinitionDisplay Component: Shows the results, loading state, or error message
function DefinitionDisplay() {
  const { wordData, loading, error } = useDictionaryStore();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!wordData) {
    return <p className="place-holder">Enter a word to get started.</p>;
  }
  
  // **THE FIX:** This check handles the API's error message object.
  // If wordData is not an array, we know the word wasn't found.
  if (!Array.isArray(wordData)) {
    return <p style={{ color: 'red' }}>Word not found. Please check the spelling.</p>;
  }

  // The API returns an array, so we take the first result
  const wordResult = wordData[0];

  // Safely find the first available phonetic text
  const phonetic = (wordResult.phonetics || []).find(p => p.text)?.text;

  return (
    <div className="definition-container">
      {/* Word and Phonetic Spelling */}
      <div className="word-header">
        <h2>{wordResult.word}</h2>
        {phonetic && <p className="phonetic">{phonetic}</p>}
      </div>

      {/* Meanings and Definitions */}
      {(wordResult.meanings || []).map((meaning, index) => (
        <div key={index} className="meaning-block">
          <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>
          <ol className="definition-list">
            {(meaning.definitions || []).map((def, i) => (
              <li key={i}>
                {def.definition}
                {def.example && <p className="example"><em>"{def.example}"</em></p>}
              </li>
            ))}
          </ol>
        </div>
      ))}
      
      {/* Origin - Future Update*/}
      {/* {wordResult.origin && (
        <div className="meaning-block">
          <h4 className="part-of-speech">Origin</h4>
           <ul className="definition-list">
            <li>{wordResult.origin}</li>
          </ul>
        </div>
      )} */}
    </div>
  );
}

export default DefinitionDisplay;

