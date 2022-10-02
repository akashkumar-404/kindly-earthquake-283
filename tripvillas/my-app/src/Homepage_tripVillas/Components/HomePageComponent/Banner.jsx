import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./homepage.module.css";
const Banner = () => {
  const [locationText, setLocationText] = useState("");
  const [searchData, setSearchData] = useState([]);
  let timer;
  const handleLocationInputChange = (e)=>{
    setLocationText(e.target.value);
    if(timer){
      clearTimeout(timer);
      console.log("time cleared")
    }
    if(e.target.value){
      timer = setTimeout(()=>{
        axios.get(`https://serene-sands-22517.herokuapp.com/hotels?location_like=${e.target.value}`).then(item=>setSearchData(item.data)).catch(e=>console.log(e))
      },800);
    }else{
      setSearchData([]);
    }
  }

  const handleSelectLocation = (text)=>{
    setLocationText(text);
    setSearchData([]);
  }
  const navigate = useNavigate();
  const handleRedirect=()=>{
    return navigate("/hotels");
  }
  return (
    <Box w={[480, 767, 991, 1440]} className={style.homeBannar}>
      <Box className={style.bannarContent}>
        <Text className={style.bannerText}>
          Book <del>Hotels</del> Vacation Rentals
        </Text>
        <Text className={style.bannerText}>
          Top Holiday Homes - Villas, Apartments & Homestays
        </Text>
        <Box className={style.bannerFormBox}>
          <Box className={style.inputLocationFlex} position="relative">
            <input
              type={"text"}
              value={locationText}
              onChange={(e)=>handleLocationInputChange(e)}
              className={style.bannerInput + " " + style.bannerInputLocation}
              placeholder="Location"
            />
            {locationText &&searchData.length>0 && (
              <Box color="black" maxHeight={"200px"}  overflowY="scroll" className={style.searchResultBox}>
                {
                  searchData.map(data=>{
                    return <Text onClick={()=>handleSelectLocation(data.location)} padding={"12px 14px"} className={style.searchDataResText} borderBottom={"1px solid"} key={data.id}>{data.location}</Text>
                  })
                }
              </Box>
            )}
          </Box>
          <input
            type="date"
            placeholder=""
            className={style.bannerInputDate + " " + style.bannerInput}
          />
          <input
            type="date"
            className={style.bannerInputDate + " " + style.bannerInput}
          />
          <select className={style.bannerInput}>
            <option>Select Guests</option>
            {new Array(10).fill(1).map((item, index) => {
              return (
                <option key={index} value={index + 1}>
                  {index + 1 == 1
                    ? index + 1 + " guest"
                    : index + 1 + " guests"}
                </option>
              );
            })}
          </select>
          <button onClick={()=>{handleRedirect()}} className={style.bannerBtn + " " + style.bannerInput}>
            CHECKOUT
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
