const initialState = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Charlie" },
    { id: 3, name: "David" },
    { id: 2, name: "Kelly" },
    { id: 3, name: "Nora" },
    { id: 2, name: "Monika" },
    { id: 3, name: "Olha" },
    { id: 4, name: "Patric" }
  ],
  filter: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export default reducer;