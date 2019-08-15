import {PostApi} from '../../utils/api';

const PostListActions = {
  showPosts: (posts) => {
    return {
      type: "POSTS:SET_POSTS",
      payload: posts
    }
  },
  addPost: (post) => {
    return {
      type: "POSTS:ADD_POST",
      payload: post
    }
  },
  fetchPost: (id) => dispatch => {
    PostApi.get(id).then(({data}) => {
      dispatch(PostListActions.addPost(data))
    })
  },
  fetchPosts: () => dispatch => {
    PostApi.get().then(({data}) => {
      dispatch(PostListActions.showPosts(data))
    })
  }
};

export default PostListActions;
