import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData_fp03_063 } from "../../Redux/AppReducer/action";
import About from "../Components/About";
import CurrOpp from "../Components/Curr_opportunity";
import Provides from "../Components/Provides";
import QandA from "../Components/QandA";
import SingleTataRioDeGoa from "./SinglePage-4";
import SingleKenishaHolidayHomes from "./SinglePage-3"
import SingleWhiteVillasSahapur from  "./SinglePage-2"
import SingleWhiteVillasKasara from "./SinglePage"
import CheckNav from "../Components/Checkout-Navbar";


export default function Managed(){
  const data = useSelector(state=>state.AppReducer.hotels_fw19_0144)
  const dispatch=useDispatch();
  useEffect(()=>{
       dispatch(GetData_fp03_063())
  },[])
  console.log(data)
    return(
        <>
        <CheckNav/>
        <About/>
        <Provides/>
        <QandA/>
        {
         data.length>0 && data.map((item)=>{
           return <CurrOpp key={item.id} data={item}/>
         })
        }  
        <br />
        <SingleTataRioDeGoa/>   
        <br/>
        <SingleKenishaHolidayHomes/> 
        <br />
        <SingleWhiteVillasSahapur/>
        <br />
        <SingleWhiteVillasKasara/>  
        </>
    )
}