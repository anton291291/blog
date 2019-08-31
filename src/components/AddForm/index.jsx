import React from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import  ArrowBack  from '@material-ui/icons/ArrowBack';

import "./AddForm.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
  },
  rightIcon: {
   marginLeft: theme.spacing(1),
 },
 button: {
    margin:" 20px auto",
  }
}));

const AddForm = ({ title, text, imageUrl,onSubmit,onChangeText, onChangeTitle,onChangeImage, _id}) => {

  const classes = useStyles();

  return (
    <div className="form-block">
      <ScrollAnimation
        animateIn='fadeIn'
        duration={2}
      >
        <Link to="/">
          <Button variant="contained" color="secondary"
            size="small"
            className="form-block__button--back" >
            <ArrowBack/>
          </Button>
        </Link>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-email-input"
            label="Линк на картинку"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={imageUrl}
            onChange={onChangeImage}
          />
          <TextField
            id="outlined-required"
            label="Заголовок поста"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={title}
            onChange={onChangeTitle}
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
            value={text}
            onChange={onChangeText}
          />
          <Button variant="contained"
            color="primary"
            className={classes.button}
            onClick={onSubmit}
          >
            Запостить
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
          </form >

        </ScrollAnimation>
    </div>
);
}

export default AddForm;
