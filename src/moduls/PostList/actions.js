import {PostApi} from '../../utils/api';

const PostListActions = {
  setPosts: (posts) => {
    return {
      type: "POSTS:SET_POSTS",
      payload: posts
    }
  },
  fetchPosts: () => {return dispatch => {
    PostApi.get().then(({data}) => {
      dispatch(PostListActions.setPosts(data))
    })
  }},
};

export default PostListActions;
