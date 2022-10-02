import { Center, Divider, Flex } from "@chakra-ui/react";
import CheckoutTataRio from "../Components/CheckoutTataRio";
import CheckoutSidebar from "../Components/CheckoutSidebar";
import CheckNav from "../Components/Checkout-Navbar";

export default function CheckoutsTataRio(){
    return(
        <>
        <CheckNav/>
        <Flex background={"#FFFAF0"} >
            <CheckoutSidebar/>
            <Center >
                <Divider orientation='vertical' />
            </Center>
            <CheckoutTataRio/>
        </Flex>
        </>
    )
}