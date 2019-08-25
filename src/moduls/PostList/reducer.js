const initialState = {
  posts: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case "POSTS:SET_POSTS":
      return {
        ...state,
        posts:payload,
      };
      case 'POSTS:WATCH_POST':
        return {
            ...state,
            posts: [
              ...state.posts, payload
            ]
      };
      case 'POSTS:DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter((post) => {
          return  post._id !== payload
        })
      };
      case "POSTS:ADD_POST":
        return {
          ...state,
          forms: payload
        };

      case "POSTS:LOADING":
        return {
          ...state,
          isLoading: payload
        };

      case "POSTS:STOP_LOADING":
        return {
          ...state,
          isLoading: payload
        };

    default:
      return state;
  }
};
