import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetData_fw19_0144 } from '../../Redux/AppReducer/action'
import Navbar from '../components/navbar'

const Hotel_list_fw19_0144 = () => {
    const hotels=useSelector(state=>state.AppReducer.hotels_fw19_0144)
    const dispatch=useDispatch()
    console.log(hotels)
 useEffect(()=>{
  dispatch(GetData_fw19_0144()).then((res)=>{
    console.log(res.payload)
  })
 },[])
  
  return (
    <div>
        <Navbar />
      <h1>adsdcdcdsc</h1>
    </div>
  )
}

export default Hotel_list_fw19_0144