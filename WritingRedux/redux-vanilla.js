const increment = (amount) => {
  return {
    type: "INCREMENT",
    payload: amount
  }
}

const decrement = (amount) => {
  return {
    type: "DECREMENT",
    payload: amount    
  }
}

const initialState = { count: 0 }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload
      }

    case "DECREMENT": 
      return {
        count: state.count - action.payload
      }

    default: 
      return state
  }
}

dispatch(increment(5))