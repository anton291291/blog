import React,{useState, useEffect} from 'react';

import {SearchInput} from '../../../components';

const SearchInputContainer = ({fetchSearchPosts,isFiltered}) => {

  const [value,setValue] = useState(sessionStorage.getItem('search'));

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

export default SearchInputContainer;
