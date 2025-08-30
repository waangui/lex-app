import { create } from 'zustand';
import axios from 'axios';

// 
const useDictionaryStore = create((set) => ({
  // The word data we get from the API
  wordData: null,
  // A boolean to know if we are currently fetching data
  isLoading: false,
  // Any error that might occur during the API call
  error: null,
  // The function to fetch a word's definition
  fetchWord: async (word) => {
    // 1. Set loading state to true and clear previous data/errors
    set({ isLoading: true, wordData: null, error: null });

    try {
      // 2. Make the API call using axios
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      
      // 3. Update the store with the received data
      set({ wordData: response.data[0], isLoading: false });

    } catch (error) {
      // 4. If an error occurs, update the store with a specific message
      if (error.response && error.response.status === 404) {
        set({ error: 'Word not found. Please check the spelling.', isLoading: false });
      } else {
        set({ error: 'An unexpected error occurred. Please try again.', isLoading: false });
      }
    }
  },
}));

export default useDictionaryStore;
