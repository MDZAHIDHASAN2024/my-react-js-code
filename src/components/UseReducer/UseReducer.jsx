export const initialState = {
  users: [{ id: 101, name: 'jahid' }],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return {
        state,
      };
  }
};
