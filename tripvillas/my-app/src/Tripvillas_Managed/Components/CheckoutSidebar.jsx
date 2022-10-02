import { Box, Flex, Text } from "@chakra-ui/react";
import {BsFillBagCheckFill} from "react-icons/bs"
import {IoHomeSharp} from "react-icons/io5"

export default function CheckoutSidebar(){
    return(
        <Box width={"20%"}>
          <Flex alignItems={'center'} gap="10px" padding={"5px"} width="90%" m={"auto"}>
            <Text  fontSize={{base:"20px" ,md:"25px",lg:"30px"}}>
            <BsFillBagCheckFill color="grey" />
            </Text>
            <Text fontSize={{base:"12px",md:"18px",lg:"20px"}}  fontWeight={"700"}>Check Out</Text>
          </Flex>
          <Flex alignItems={'center'} gap="10px" padding={"5px"} width="90%" m={"auto"}>
            <Text  fontSize={{base:"20px" ,md:"25px",lg:"30px"}}>
              <IoHomeSharp color="grey"/>
            </Text>
            <Text fontSize={{base:"12px",md:"18px",lg:"20px"}} fontWeight={"700"}>Home</Text>
          </Flex>
        </Box>
    )
}