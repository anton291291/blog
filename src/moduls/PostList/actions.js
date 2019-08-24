import {PostApi} from '../../utils/api';

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

  fetchAddPost: (data) => dispatch => {
    PostApi.post(data).then(() => console.log("Success fetch to DB"));
      dispatch(PostListActions.addPost(data));
      PostApi.get().then(({data}) => {
        console.log("Success downloading");
        dispatch(PostListActions.showPosts(data));
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

};

export default PostListActions;
