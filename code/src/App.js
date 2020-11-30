import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { ui } from './reducers/ui'
import { todos } from './reducers/todos'
import { TodoList } from './components/TodoList'
import { LoadingIndicator } from './components/LoadingIndicator'
import { FetchTodosButton } from './components/FetchTodosButton'

const reducer = combineReducers({
  ui: ui.reducer,
  todos: todos.reducer,
})

const store = configureStore({ reducer })

const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <TodoList />
      <FetchTodosButton />
    </Provider>
  )
}

export default App

//there's something here that the browser doesn't like. 
//Error Message: "Reducer "todos" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
//this error points to line 11 of this file, but is most likely to do with line 8 in todos.js