import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function CheckoutTataRio(){
    return(
        <Box width={"80%"} textAlign="center" >
               <SimpleGrid columns={[1,2,2]} width={"90%"} m="auto" alignItems={"center"} gap="10px">
                    <Box  width="100%" height={"100%"}><Image src="https://media.tatarealty.in/projects/March2020/bc81ac5da5ea5dc59195.webp"/></Box>
                    <Box  width="100%">
                            <Text fontSize={{base:"15px",md:"28px",lg:"32px"}} fontWeight="500">Tata Rio De Goa</Text>
                            <Text fontSize={{base:"10px",md:"16"}}>Vidhyanagar Colony, Next to MES College, Dabolim, Goa 403726</Text>
                            <Text fontSize={{base:"12 px",md:"23px",lg:"26px"}} fontWeight="500">Starting Price : ₹ 49.9 Lacks</Text>
                            <br />
                            <Button className="ExploreBtn" colorScheme={"#F6AD55"}>Payment</Button>
                    </Box>
               </SimpleGrid>
        </Box>
    )
}