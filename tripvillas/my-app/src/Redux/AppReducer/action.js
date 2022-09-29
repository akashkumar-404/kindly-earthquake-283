// create your own function with naming convention like: 
// for getting the data use : getData_<student_code>
import * as types from "./actionType"
import axios from "axios"

export const GetData_fw19_0144=(params)=>(dispatch)=>{
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
