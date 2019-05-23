export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

const initState = {
  data: {},
  user: { id: 'acagfgsdgfddfgfgr' },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default reducer;
