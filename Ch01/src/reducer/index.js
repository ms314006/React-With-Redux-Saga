export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

const initState = {
  data: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default reducer;
