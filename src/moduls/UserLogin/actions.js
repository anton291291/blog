import {AuthApi} from '../../utils/api';

const UserLoginActions = {

  getLoginError: (err) => {
    return {
        type: 'LOGIN:GET_ERRORS',
        payload: err.response.data
    };
  },

  loginUser: (data) => dispatch => {
    AuthApi.postLogin(data)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                dispatch(UserLoginActions.getLoginError(err));
            });
  },

};

export default UserLoginActions;
