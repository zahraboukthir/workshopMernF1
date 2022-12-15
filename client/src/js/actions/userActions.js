// saler routes

import axios from "axios";
import {
  GET_MYPRODUCTS_FAILED,
  GET_MYPRODUCTS_SUCCESS,
  USER_LOADING,
} from "../const/userTypes";

/**
 * @Params Get /product/myprods
 * @description get Allproduct
 * @acces protected
 */
export const getmyproducts = () => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  try {
    const opts = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const { data } = await axios.get("http://localhost:7000/product/myprods",opts);
    dispatch({ type: GET_MYPRODUCTS_SUCCESS, payload: data.myproducts });
  } catch (error) {
    dispatch({ type: GET_MYPRODUCTS_FAILED, payload: error });
    console.log(error);
  }
};
