import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function CheckoutKenisha(){
    return(
        <Box width={"80%"} textAlign="center" >
               <SimpleGrid columns={[1,2,2]} width={"90%"} m="auto" alignItems={"center"} gap="10px">
                    <Box  width="100%" height={"100%"}><Image src="https://gos3.ibcdn.com/9998ed200a5911ec9e970a58a9feac02.jpeg"/></Box>
                    <Box  width="100%">
                            <Text fontSize={{base:"15px",md:"28px",lg:"32px"}} fontWeight="500">Kenisha Holiday Homes</Text>
                            <Text fontSize={{base:"10px",md:"16"}}>Community Managed By Tripvillas In Pawasalwadi, Maharashtra</Text>
                            <Text fontSize={{base:"12 px",md:"23px",lg:"26px"}} fontWeight="500">Starting Price : ₹ 45 Lacks</Text>
                            <br />
                            <Button className="ExploreBtn" colorScheme={"#F6AD55"}>Payment</Button>
                    </Box>
               </SimpleGrid>
        </Box>
    )
}