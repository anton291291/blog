import React from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import "./AddForm.scss";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: "column",
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
  },
  rightIcon: {
   marginLeft: theme.spacing(1),
 },
 button: {
    marginTop: theme.spacing(1),
  }
}));

const AddForm = () => {
  const classes = useStyles();
  return (
    <>
      <Link to="/">
        <Button variant="contained" color="secondary" size="medium">
          Назад
        </Button>
      </Link>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"

        />
        <TextField
          id="outlined-required"
          label="Заголовок поста"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Текст поста"
          placeholder="Как-то мне не сиделось..."
          multiline
          fullWidth
          className={classes.textField}
          margin="normal"
          variant="outlined"
          rows="8"
        />
        </form >
        <Button variant="contained" color="primary" className={classes.button}>
          Запостить
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </>
);
}

export default AddForm;
