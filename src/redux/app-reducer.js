const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state
      //  14.00
      };
    default:
      return state;
  }
};

export default appReducer;
