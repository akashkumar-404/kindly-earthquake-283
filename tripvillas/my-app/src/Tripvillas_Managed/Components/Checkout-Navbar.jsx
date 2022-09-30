import { Box, Button, Flex, Image } from "@chakra-ui/react";

export default function CheckNav(){
    return(
       <Flex maxW={"100%"} height={{base:"40px", md:"50px",lg:"60px"}} alignItems="center"justifyContent={"space-between"} >
        <Box>
            <Image src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/img/logo-teal.450ffb75ec3e.png"/>
        </Box>
        <Box marginRight={"5%"}>
            <Button width={"100%"} maxH={{base:"30px",md:"40px",lg:"50px"}} className="ExploreBtn" colorScheme={"#F6AD55"}>Check Out</Button>
        </Box>
       </Flex>
    )
}