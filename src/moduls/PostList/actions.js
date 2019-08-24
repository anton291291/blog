import {PostApi} from '../../utils/api';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const PostListActions = {
  showPosts: (posts) => {
    return {
      type: "POSTS:SET_POSTS",
      payload: posts
    }
  },

  watchPost: (post) => {
    return {
      type: "POSTS:WATCH_POST",
      payload: post
    }
  },

  addPost: (data) => {
    return {
      type: 'POSTS:ADD_POST',
      payload: data
    };
  },

  deletePost: (id) => {
    return {
      type: 'POSTS:DELETE_POST',
      payload: id
    };
  },

  directToPost: (data) => {
    return {
    type: 'FORMS:DIRECT_TO_POST',
    payload: data
  }
  },

  fetchAddPost: (data) => dispatch => {
    PostApi.post(data).then(() => console.log("Success fetch to DB"));
    PostApi.get().then(({data}) => {
       dispatch(PostListActions.directToPost(data[data.length - 1]))
        setTimeout(() => {
          console.log(data[data.length - 1]);
        },1000)

        {/*dispatch(PostListActions.directToPost(data));
*/}
  })
  },

  fetchDeletePost: (id) => dispatch => {
    if (global.confirm('Вы точно хотите удалить этот пост?')) {
      dispatch(PostListActions.deletePost(id));
      PostApi.delete(id);
    };
  },

  fetchPost: (id) => dispatch => {
    PostApi.get(id).then(({data}) => {
      dispatch(PostListActions.watchPost(data))
    })
  },

  fetchPosts: () => dispatch => {
    PostApi.get().then(({data}) => {
      dispatch(PostListActions.showPosts(data))
    })
  },

<<<<<<< HEAD
  changeText: (e) => {
    return {
      type: "FORMS:CHANGE_TEXT",
      payload: e
    };
  },

  changeTitle: (e) => {
    return {
      type: "FORMS:CHANGE_TITLE",
      payload: e
    };
  },

  changeImageUrl: (e) => {
    return {
      type: "FORMS:CHANGE_IMAGEURL",
      payload: e
    };
  },

  handleChangeText: (e) => dispatch => {
  dispatch(PostListActions.changeText(e))
  },

  handleChangeTitle: (e) => dispatch => {
  dispatch(PostListActions.changeTitle(e))
  },

  handleChangeImageUrl: (e) => dispatch => {
  dispatch(PostListActions.changeImageUrl(e))
  },
=======
>>>>>>> PostEditor
};

export default PostListActions;
