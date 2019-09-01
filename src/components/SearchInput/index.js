import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  search: {
    zIndex: '99',
    width: '300px',
    position: 'relative',
    top: '-121px',
    left: '180px',
    fontSize: "10px",
    backgroundColor: fade(theme.palette.common.white, 0.45),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.65),
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
    width: '70%',
  },
}));


const SearchInput = ({fetchSearchPosts}) => {
   const classes = useStyles();


  return (
    <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onKeyPress={(e) => {
                fetchSearchPosts(e.target.value)
                console.log(e.target.value);
              }}
              placeholder="поиск…"
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
