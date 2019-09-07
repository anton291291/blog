import {PostApi} from '../../utils/api';

const PostListActions = {
  showPosts: (posts) => {
    return {
      type: 'POSTS:SET_POSTS',
      payload: posts
    }
  },

  searchPosts: (posts) => {
    return {
      type: 'POSTS:SEARCH_POSTS',
      payload: posts,
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

  fetchSearchPosts: (query,char) => dispatch => {
    PostApi.getSearch(query)
    .then(({data}) => {
      dispatch(PostListActions.searchPosts(data))
    })
  },

  fetchDeletePost: (id) => dispatch => {
    if (global.confirm('Вы точно хотите удалить этот пост?')) {
      dispatch(PostListActions.deletePost(id));
      PostApi.delete(id);
    };
  },

  fetchPosts: () => dispatch => {
    dispatch(PostListActions.preloaderOn());
    PostApi.get().then(({data}) => {
      dispatch(PostListActions.showPosts(data));
    }).then(() => dispatch(PostListActions.preloaderOff())) ;
  },

};

export default PostListActions;
