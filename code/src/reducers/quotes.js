import { createSlice } from '@reduxjs/toolkit';

export const quotes = createSlice({
    name: 'quotes',
    initialState: {
        quote: {},
        history: []
    },
    reducers: {
        generateQuote: (state, action) => {
            // Check if quote from Redux store is not empty object.
            // If it is, do not push empty object to history array
            // If it is not, do it
            if (state.quote.quote) {
                state.history = [...state.history, state.quote];
            }
            state.quote = action.payload;   
        },
        historyGoBack: (state, action) => {
            if (state.history.length > 0) {
                state.quote = state.history[state.history.length - 1];
                state.history = state.history.slice(0, state.history.length - 1);
            }
        }
    }
});

