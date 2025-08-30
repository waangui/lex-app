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

  // Async function to fetch word definition from the API
  fetchWord: async (word) => {
    set({ loading: true, error: null, wordData: null });
    console.log("Step 1: Search initiated, loading set to true.");

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      
      // DEBUG: Log the data we received from the API
      console.log("Step 2: Successfully received data from API:", response.data);
      
      console.log("Step 3: Attempting to update state with new data...");
      set({ wordData: response.data, loading: false });
      console.log("Step 4: State updated successfully.");

    } catch (error) {
      // DEBUG: Log the full error object if something goes wrong
      console.error("An error occurred in the fetchWord function:", error);

      if (error.response && error.response.status === 404) {
        set({ error: 'Word not found. Please check the spelling and try again.', loading: false, wordData: null });
      } else {
        set({ error: 'An unexpected error occurred. Please try again later.', loading: false, wordData: null });
      }
    }
  },

  // reset the search state
  resetSearch: () => set({ wordData: null, error: null, loading: false }),

}));

export default useDictionaryStore;
