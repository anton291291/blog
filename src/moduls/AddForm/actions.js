import {PostApi} from '../../utils/api';

const AddFormActions = {
  addPost: (data) => {
    return {
      type: 'POSTS:ADD_POST',
      payload: data
    };
  },

  fetchAddPost: (data) => dispatch => {
    PostApi.post(data)
      dispatch(AddFormActions.addPost(data));
  },
};

export default AddFormActions;
