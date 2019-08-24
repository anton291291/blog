const initialState = {
  posts: [],
  text: "",
  title:"",
imageUrl: "",
id: {},

};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case "POSTS:SET_POSTS":
      return {
        ...state,
        posts:payload,
<<<<<<< HEAD
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

    case "FORMS:CHANGE_TEXT":
      return {
          ...state,
        text: payload
    };

    case "FORMS:CHANGE_TITLE":
      return {
          ...state,
        title: payload
    };

    case "FORMS:CHANGE_IMAGEURL":
      return {
          ...state,
        imageUrl: payload
    };

    case "FORMS:DIRECT_TO_POST":
      return {
          ...state,
        id: payload._id
    };
=======
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
>>>>>>> PostEditor

    default:
      return state;
  };
};
