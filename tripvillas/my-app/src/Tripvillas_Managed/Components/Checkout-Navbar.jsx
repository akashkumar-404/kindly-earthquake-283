import { Box, Button, Flex, Image } from "@chakra-ui/react";

export default function CheckNav(){
    const HandleCheck=()=>{
        console.log("got to payment page");
    }
    return(
       <Flex maxW={"100%"} height={{base:"40px", md:"50px",lg:"60px"}} alignItems="center"justifyContent={"space-between"} >
        <Box>
            <Image src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/img/logo-teal.450ffb75ec3e.png"/>
        </Box>
        <Box marginRight={"5%"}>
            <Button width={"100%"} maxH={{base:"30px",md:"40px",lg:"50px"}} className="ExploreBtns" colorScheme={"#9B2C2C"} onClick={HandleCheck}>Check Out</Button>
        </Box>
       </Flex>
    )
}