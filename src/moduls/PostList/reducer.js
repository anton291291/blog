const initialState = {
  posts: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case "POSTS:SET_POSTS":
      return {
        ...state,
        posts:payload,
      };
      case 'POSTS:ADD_POST':
        return {
            ...state,
            posts: [
              ...state.posts, payload

            ]
        };
    default:
      return state;
  }
};
