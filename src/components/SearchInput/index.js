import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles(theme => ({
  search: {
    zIndex: '99',
    position: 'relative',
    fontSize: '10px',
    backgroundColor: fade(theme.palette.common.white, 0.6),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },

  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    width: '90%',
  },
}));


const SearchInput = (props) => {

  const {autoFocus,onKeyUp, value, onChange}= props;

  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder='поиск…'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default SearchInput;
