
import { GET_USER_FAILED, GET_USER_SUCCESS, LOADING, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILED, REGISTER_SUCCESS } from './../const/authTypes';
import axios from 'axios'

/**
 * @params POST /auth/signup
 * @description register new user
 * @access public
 */
export const register = (newuser,navigate) =>async(dispatch)=>{
dispatch({type:LOADING})

try { const res=await axios.post('http://localhost:7000/auth/signup',newuser)
dispatch({type:REGISTER_SUCCESS,
payload:res.data
})
    
navigate('/signin')
} catch (error) {
    console.log(error.response.data)
    dispatch({type:REGISTER_FAILED,
        payload:error.response.data
        })
        error.response.data.forEach((el) => {
            alert(el.msg);
          }); 
}
}

/**
 * @params POST /auth/signin
 * @description login user
 * @access public
 */

export const loginuser = (user,navigate) => async(dispatch)=>{
    dispatch({type:LOADING})

    try { const res=await axios.post('http://localhost:7000/auth/signin',user)
    dispatch({type:LOGIN_SUCCESS,
    payload:res.data
    })
       navigate(
res.data.user.role=="client"?'/dhbClient':'/dhbSaler'

       ) 
 
    } catch (error) {
        console.log(error.response.data)
        dispatch({type:LOGIN_FAILED,
            payload:error.response.data
            })
           if(error.response.data) {
                alert(error.response.data.msg);
              }; 
    }
}

/**
 * @params GET /auth/
 * @description get current user
 * @access private
 */
export const getuser = () => async(dispatch)=>{
dispatch({type:LOADING})
try {
    const opts={
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res=await axios.get("http://localhost:7000/auth/",opts)
    dispatch({type:GET_USER_SUCCESS,payload:res.data})
} catch (error) {
    dispatch({type:GET_USER_FAILED,payload:error})
}

}
export const logout = () => {
    return{ type:LOGOUT }
}