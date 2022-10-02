import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CheckNav() {
  const navigate=useNavigate()
  const HandleCheck = () => {
    return navigate('/payment')
  };
  return (
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
          onClick={HandleCheck}
        >
          Check Out
        </Button>
      </Box>
    </Flex>
  );
}
