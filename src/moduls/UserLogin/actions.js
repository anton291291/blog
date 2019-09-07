import {AuthApi} from '../../utils/api';
import setAuthToken from '../../core/setAuthToken';
import jwt_decode from 'jwt-decode';


const UserAuthActions = {

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
    dispatch(UserAuthActions.modalOn(bool))
  },

  registerUser: (user, history) => dispatch => {
    AuthApi.postRegister(user)
            .then(res => {
              console.log(res);
              history.push('/posts')})
            .catch(err => {
              console.log(err);
                dispatch(UserAuthActions.getLoginError(err));
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
              dispatch(UserAuthActions.setCurrentUser(decoded));
              dispatch(UserAuthActions.modalOn(bool))
              dispatch(UserAuthActions.deleteLoginError())
            })
            .catch(err => {
                dispatch(UserAuthActions.getLoginError(err));
            });
  },

  logoutUser:  (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(UserAuthActions.setCurrentUser({}));
    history.push('/posts');
},

};

export default UserAuthActions;
