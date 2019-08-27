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

  preloaderOn: (bool) => {
    return {
      type: 'POSTS:LOADING',
    payload: true
  }
},

preloaderOff: (bool) => {
  return {
    type: 'POSTS:STOP_LOADING',
  payload: false
}
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
    dispatch(PostListActions.preloaderOn());

    PostApi.get().then(({data}) => {
      dispatch(PostListActions.showPosts(data))
    }).then(() => dispatch(PostListActions.preloaderOff()));
  },

};

export default PostListActions;
