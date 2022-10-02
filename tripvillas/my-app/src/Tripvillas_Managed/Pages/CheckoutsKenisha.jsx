import { Center, Divider, Flex } from "@chakra-ui/react";
import CheckNav from "../Components/Checkout-Navbar";
import CheckoutKenisha from "../Components/CheckoutKenisha";
import CheckoutSidebar from "../Components/CheckoutSidebar";

export default function CheckoutsKeisha(){
    return(
        <>
        <CheckNav/>
        <Flex background={"#FFFAF0"} >
        <CheckoutSidebar/>
        <Center >
            <Divider orientation='vertical' />
        </Center>
        <CheckoutKenisha/>
    </Flex>   
    </>
    )
}