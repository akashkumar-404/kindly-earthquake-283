import Banner_Kenisha from "../Components/Banner-3";
import KeyAmenities from "../Components/Key_Amenities";
import Kenisha_Holiday_Photos from "../Components/Photos-3";
import SingleAbout_1 from "../Components/SinglePage-About";
import Type_3 from "../Components/Type-3";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SingleKenishaHolidayHomes() {
  let navigate = useNavigate();

  const handleCheckout = () => {
    return navigate("/checkout-kenisha");
  };
  return (
    <>
      <Flex
        maxW={"100%"}
        height={{ base: "40px", md: "50px", lg: "60px" }}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Box>
          <Image src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/img/logo-teal.450ffb75ec3e.png" />
        </Box>
        <Box marginRight={"5%"}>
          <Button
            width={"100%"}
            maxH={{ base: "30px", md: "40px", lg: "50px" }}
            className="ExploreBtns"
            colorScheme={"#9B2C2C"}
            onClick={handleCheckout}
          >
            Check Out
          </Button>
        </Box>
      </Flex>
      <Banner_Kenisha />
      <Kenisha_Holiday_Photos />
      <SingleAbout_1 />
      <KeyAmenities />
      <Type_3 />
    </>
  );
}
