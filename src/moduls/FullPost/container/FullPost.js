import React,{useEffect} from 'react';
import {FullPost} from '../../../components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import PostListActions from '../../PostList/actions';

const FullPostContainer = (props) => {

  useEffect(() => {
    const {fetchPost} = props;
    fetchPost(props.match.params.id);
  },[]);

  return  <FullPost {...props}/>
};

const mapStateToProps = ({posts},{match: {params:{id}}}) => {
  return posts.posts.filter(post => post._id === id)[0];
};

export default withRouter(
  connect(mapStateToProps, PostListActions)(FullPostContainer)
);
