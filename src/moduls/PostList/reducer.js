const initialState = {
  posts: null,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case "POSTS:SET_POSTS":
      return {
        ...state,
        posts:payload,
      }
    default:
      return state;
  }
};
