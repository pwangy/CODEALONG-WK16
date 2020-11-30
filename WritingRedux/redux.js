// here is a simple action
const setName = newName => {
  return {
    type: "SET_NAME",
    payload: newName
  }
}

// declaration of initial state as an object
const initialState = { name: "Martin" }

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        name: action.payload
      }
    default:
      return state
  }
}

// something which dispatches the action
<button onClick={() => dispatch(setName("Peggy"))}>
  change name
</button>