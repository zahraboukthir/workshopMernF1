import {
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  LOADING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../const/authTypes";

const initialState = {
  loading: false,
  error: null,
  currentUser: {},
  isAuth: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, currentUser: payload.newuser };
    case REGISTER_FAILED:
    case LOGIN_FAILED:
      case GET_USER_FAILED:
      return { ...state, loading: false, error: payload };
    case LOGIN_SUCCESS:
        localStorage.setItem("token",payload.token)
      return { ...state, loading: false, currentUser: payload.user ,isAuth:true};
    case GET_USER_SUCCESS:
      return{...state,loading: false, currentUser: payload.user ,isAuth:true}
      case LOGOUT:
        localStorage.removeItem("token")
        return{
          loading: false,
          error: null,
          currentUser: {},
          isAuth: false,
        }
    default:
      return state;
  }
};
