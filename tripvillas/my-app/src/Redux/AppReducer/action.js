// create your own function with naming convention like: 
// for getting the data use : getData_<student_code>
import * as types from "./actionType"
import axios from "axios"

export const GetData_fw19_0144=(params)=>(dispatch)=>{
    console.log("string",params)
    dispatch ({type:types.GET_DATA_fw19_0144_REQUEST})
    return axios.get(`https://serene-sands-22517.herokuapp.com/hotels`,params).then((res)=>{
        console.log(res)
        return dispatch({type:types.GET_DATA_fw19_0144_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch(
            {
                type:types.GET_DATA_fw19_0144_FAILURE
            }
        )
    })
}

export const GetData_fp03_063 =()=>(dispatch)=>{
dispatch({type:types.GET_DATA_fp03_063_REQUEST})
return axios.get("https://shrouded-tor-13668.herokuapp.com/bodySection").then((res)=>{
     dispatch({type:types.GET_DATA_fp03_063_SUCCESS,payload:res.data})
})
.catch((err)=>{
    dispatch({type:types.GET_DATA_fp03_063_FAILURE})
})
}
