import { Center, Divider, Flex } from "@chakra-ui/react";
import CheckoutSidebar from "../Components/CheckoutSidebar";
import CheckNav from "../Components/Checkout-Navbar";
import CheckoutSahapur from "../Components/CheckoutSahapur";

export default function CheckoutsSahapur(){
    return(
        <>
        <CheckNav/>
        <Flex background={"#FFFAF0"} >
            <CheckoutSidebar/>
            <Center >
                <Divider orientation='vertical' />
            </Center>
            <CheckoutSahapur/>
        </Flex>
        </>
    )
}