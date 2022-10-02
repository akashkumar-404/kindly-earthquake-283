
import Banner from "../Components/Banner";
import KeyAmenities from "../Components/Key_Amenities";
import Photos_1 from "../Components/Photos-1";
import SingleAbout_1 from "../Components/SinglePage-About";
import Type_1 from "../Components/Type-1";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SingleWhiteVillasKasara(){
  let navigate = useNavigate();

  const handleCheckout=()=>{
    return navigate("/checkout-kasara");

    navigate("/checkout-tatario");
    navigate("/checkout-sahapur");

    navigate("/checkout-kenisha")
  }
return (
   <>
   <Flex maxW={"100%"} height={{base:"40px", md:"50px",lg:"60px"}} alignItems="center"justifyContent={"space-between"} >
        <Box>
            <Image src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/img/logo-teal.450ffb75ec3e.png"/>
        </Box>
        <Box marginRight={"5%"}>
            <Button width={"100%"} maxH={{base:"30px",md:"40px",lg:"50px"}} className="ExploreBtns" colorScheme={"#9B2C2C"} onClick={handleCheckout} >Check Out</Button>
        </Box>
       </Flex>
     <Banner/>
     <Photos_1/>
     <SingleAbout_1/>
     <KeyAmenities/>
     <Type_1/>
   </>
)
}