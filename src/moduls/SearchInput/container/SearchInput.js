import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {SearchInput} from '../../../components';

import PostListActions from '../../PostList/actions';

const SearchInputContainer = ({modalOn,fetchSearchPosts,isFiltered}) => {

  const [value,setValue] = useState(sessionStorage.getItem('search'));

  useEffect(() => {
    modalOn(false)
  },[value]);

  useEffect(() => {
    sessionStorage.setItem('search',value)
  },[value])

  return (
    <SearchInput
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      onKeyUp={(e) => {
        fetchSearchPosts(e.target.value)
      }}
     />
  );
};

const mapStateToProps = ({modal}) => {
  return {
    ...modal
  }
};

const mapDispatchToProps = {
  ...PostListActions,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchInputContainer)
);
