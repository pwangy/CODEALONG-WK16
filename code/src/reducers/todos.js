import { createSlice } from '@reduxjs/toolkit'

import { ui } from './ui'

export const todos = createSlice({
  name: 'todos',
  intitialState: {
    all: [null]
  },
  reducers: {
    setTodos: (state, action) => {
      state.all = action.payload
    }
  }
})


// by constructing this in a way where this function is called by another function. we could pass an id or whatever as a prop.
export const fetchTodos = () => {
  return (dispatch) => {
    disptach(ui.actions.setLoading(true))
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((json) => {
        dispatch(todos.actions.setTodos(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}