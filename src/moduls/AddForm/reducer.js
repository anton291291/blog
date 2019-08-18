const initialState = {
  forms: []
};

export default function (state = initialState, action) {

  const {type, payload} = action;

  switch (type) {
    case "POSTS:ADD_POST":
      return {
        ...state,
        forms: payload
      };
    default:
    return state;
  }
}
