import { GET_MYPRODUCTS_FAILED, GET_MYPRODUCTS_SUCCESS, USER_LOADING } from "../const/userTypes";

const initialState = {
  userloading: true,
  myproducts: [],
  error: null,
 
}

export const userReducer= (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        userloading: true,
      };
    case GET_MYPRODUCTS_SUCCESS:
      return {
        ...state,
        prodloading: false,
        myproducts: payload,
      };
      case GET_MYPRODUCTS_FAILED:
        return {
          ...state,
          userloading: false,
          error: payload,
        };
  
  
  default:
    return state
  }
}
