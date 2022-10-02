import { Center, Divider, Flex } from "@chakra-ui/react";
import CheckoutSidebar from "../Components/CheckoutSidebar";
import CheckNav from "../Components/Checkout-Navbar";
import CheckoutKasara from "../Components/CheckoutKasara";

export default function CheckoutsKasara(){
    return(
        <>
        <CheckNav/>
        <Flex background={"#FFFAF0"} >
            <CheckoutSidebar/>
            <Center >
                <Divider orientation='vertical' />
            </Center>
            <CheckoutKasara/>
        </Flex>
        </>
    )
}