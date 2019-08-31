import {AuthApi} from '../../utils/api';
import setAuthToken from '../../core/setAuthToken';
import jwt_decode from 'jwt-decode';


const UserLoginActions = {

  getLoginError: (err) => {
    return {
        type: 'LOGIN:GET_ERRORS',
        payload: err.response.data
    };
  },

  deleteLoginError: () => {
    return {
      type: 'LOGIN:DELETE_ERRORS',
      payload: undefined
    }
  },

  setCurrentUser: decoded => {
    return {
        type: 'LOGIN:SET_CURRENT_USER',
        payload: decoded
    }
  },

  modalOn: (bool) => {
    return {
      type: 'LOGIN:MODAL_TOOGLE',
      payload: bool
    }
  },

  toggleModal: (bool) => dispatch => {
    dispatch(UserLoginActions.modalOn(bool))
  },

  registerUser: (user, history) => dispatch => {
    AuthApi.postRegister(user)
            .then(res => {
              console.log(res);
              history.push('/posts')})
            .catch(err => {
              console.log(err);
                dispatch(UserLoginActions.getLoginError(err));
            });
},

  loginUser: (data,bool) => dispatch => {
    AuthApi.postLogin(data)
            .then(res => {
              console.log(res);
              const { token } = res.data;
              localStorage.setItem('jwtToken', token);
              setAuthToken(token);
              const decoded = jwt_decode(token);
              dispatch(UserLoginActions.setCurrentUser(decoded));
              dispatch(UserLoginActions.modalOn(bool))
              dispatch(UserLoginActions.deleteLoginError())
            })
            .catch(err => {
                dispatch(UserLoginActions.getLoginError(err));
            });
  },

  logoutUser:  (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(UserLoginActions.setCurrentUser({}));
    history.push('/posts');
},

};

export default UserLoginActions;
