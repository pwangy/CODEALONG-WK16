import { createSlice } from '@reduxjs/toolkit'

export const counter = createSlice({
  name: "counter",
  intialState: {
    count: 0
  },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload
    }
  }
})

// example usage
dispatch(counter.actions.increment(5))