const initialState = {
  posts: [],
  isFiltered: false,
  isLoading: false,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'POSTS:SET_POSTS':
      return {
        ...state,
        posts:payload,
        isFiltered: false
      };
      case 'POSTS:SEARCH_POSTS':
        return {
            ...state,
            posts:  payload,
            isFiltered: true,
      };
      case 'POSTS:DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter((post) => {
            return  post._id !== payload
          })
      };
      case 'POSTS:ADD_POST':
        return {
          ...state,
          forms: payload
      };
      case 'POSTS:LOADING':
        return {
          ...state,
          isLoading: payload
        };

      case 'POSTS:STOP_LOADING':
        return {
          ...state,
          isLoading: payload
        };

    default:
      return state;
  }
};
