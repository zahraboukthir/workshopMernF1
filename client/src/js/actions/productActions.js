import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_SUCCESS,
  DELET_PRODUCT_FAILED,
  DELET_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILED,
  EDIT_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAILED,
  GET_ALL_PRODUCTS_SUCCESS,
  PROD_DETAILS_FAILED,
  PROD_DETAILS_SUCCESS,
  PROD_LOADING,
} from "../const/productConst";
import axios from "axios";
/**
 * @Params Get /product
 * @description get Allproduct
 * @acces public
 */
export const getallproducts = () => async (dispatch) => {
  dispatch({ type: PROD_LOADING });

  try {
    const { data } = await axios.get("http://localhost:7000/product");
    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error) {
    dispatch({ type: GET_ALL_PRODUCTS_FAILED, payload: error });
  }
};
/**
 * @Params Get /product/:idprod
 * @description get one product by id
 * @acces public
 */

export const getProdDetails = (idprod) => async (dispatch) => {
  dispatch({ type: PROD_LOADING });

  try {
    const { data } = await axios.get(`http://localhost:7000/product/${idprod}`);
    dispatch({ type: PROD_DETAILS_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({ type: PROD_DETAILS_FAILED, payload: error });
  }
};
/**
 * @Params POST /product/addprod
 * @description add new product
 * @acces protected (authorizer=  authentifier + role / saler or admin)
 */

export const addproduct = (newproduct, navigate) => async (dispatch) => {
  dispatch({ type: PROD_LOADING });
  try {
    const opts = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    await axios.post("http://localhost:7000/product/addprod", newproduct, opts);
    dispatch({ type: ADD_PRODUCT_SUCCESS });
    dispatch(getallproducts());
    navigate("/products");
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAILED, payload: error });
    console.log(error);
  }
};
// Edit prod
/**
 * @Params Put /product/:idprod
 * @description Update one product
 * @acces protected
 */
export const editproduct =
  (idprod, editedproduct, navigate) => async (dispatch) => {
    dispatch({ type: PROD_LOADING });
    const opts = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    try {
      const { data } = await axios.put(
        `http://localhost:7000/product/${idprod}`,
        editedproduct,
        opts
      );
      console.log(data);
      dispatch({ type: EDIT_PRODUCT_SUCCESS });
      dispatch(getallproducts());
      navigate("/products");
    } catch (error) {
      dispatch({ type: EDIT_PRODUCT_FAILED, payload: error });
      console.log(error);
    }
  };
//delete prod

/**
 * @Params Delete /product/:idprod
 * @description Delete one product
 * @acces protected
 */
export const deletproduct = (idprod) => async (dispatch) => {
  dispatch({ type: PROD_LOADING });
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const { data } = await axios.delete(
      `http://localhost:7000/product/${idprod}`,
      opts
    );
    console.log(data);
    dispatch({ type: DELET_PRODUCT_SUCCESS, payload: data });
    dispatch(getallproducts());
  } catch (error) {
    dispatch({ type: DELET_PRODUCT_FAILED, payload: error });
    console.log(error);
  }
};
