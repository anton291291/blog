const initialState = {};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case "LOGIN:GET_ERRORS":
      return {
        payload
      };
    case "LOGIN:DELETE_ERRORS":
      return {
        payload
      };
    default:
      return state;
  }
};
