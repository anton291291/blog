import React,{useEffect} from 'react';
import {FullPost} from '../../../components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import PostListActions from '../../PostList/actions';

const FullPostContainer = (props) => {

  useEffect(() => {
    const {fetchPosts} = props;
    fetchPosts();
  },[]);

  return  <FullPost {...props}/>
};

const mapStateToProps = ({posts},{match: {params:{id}}}) => {
  console.log(posts.posts.filter(post => post._id === id)[Array.length - 1]);
  return posts.posts.filter(post => post._id === id)[Array.length - 1];
};

export default withRouter(
  connect(mapStateToProps, PostListActions)(FullPostContainer)
);
