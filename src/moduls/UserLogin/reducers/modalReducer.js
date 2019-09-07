const initialState = {
  isModalOn: false
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'LOGIN:MODAL_TOOGLE':
      return {
        isModalOn: payload
      };

    default:
      return state;
  }
};
