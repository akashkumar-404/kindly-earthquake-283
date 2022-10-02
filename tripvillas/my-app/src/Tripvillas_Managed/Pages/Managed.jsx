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
import FooterBlack from "../Components/BlackFooter";
import CheckoutsKasara from "./CheckOutsKasara";
import CheckoutsSahapur from "./CheckoutsSahapur";
import CheckoutsKeisha from "./CheckoutsKenisha";
import CheckoutsTataRio from "./CheckoutsTataRio";


export default function Managed(){
  const data = useSelector(state=>state.AppReducer.hotels_fw19_0144)
  const dispatch=useDispatch();
  useEffect(()=>{
       dispatch(GetData_fp03_063())
  },[])
  console.log(data)
    return(
        <>
        <About/>
        <Provides/>
        <QandA/>
        {
         data.length>0 && data.map((item)=>{
           return <CurrOpp key={item.id} data={item}/>
         })
        }  
        {/* <br />
        <SingleTataRioDeGoa/>   
        <br/>
        <SingleKenishaHolidayHomes/> 
        <br />
        <SingleWhiteVillasSahapur/>
        <br /> 
        <SingleWhiteVillasKasara/>  */}
        <FooterBlack/>
        {/* <CheckoutsKasara/>
        <CheckoutsSahapur/>
        <CheckoutsKeisha/>
        <CheckoutsTataRio/> */}
        </>
    )
}