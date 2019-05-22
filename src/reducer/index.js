const ADD_COUNT = 'ADD_COUNT';

export const addCount = () => ({
  type: ADD_COUNT,
});

export const FETCH_COUNT = 'FETCH_COUNT';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';

const initState = {
  count: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case FETCH_SUCCESS:
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
