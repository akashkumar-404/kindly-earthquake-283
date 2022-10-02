import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function CheckoutSahapur(){
    return(
        <Box width={"80%"} textAlign="center" >
               <SimpleGrid columns={[1,2,2]} width={"90%"} m="auto" alignItems={"center"} gap="10px">
                    <Box  width="100%" height={"100%"}><Image src="https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16722/photo_1024/d9d86936f1a311e9924e0a8e1b1ce4da_photo_1024.jpeg"/></Box>
                    <Box  width="100%">
                            <Text fontSize={{base:"15px",md:"28px",lg:"32px"}} fontWeight="500">The White Villas, Sahapur</Text>
                            <Text fontSize={{base:"10px",md:"16"}}>Shahapur Village Kalam, Near Atgaon Station, Taluka - Shahapur</Text>
                            <Text fontSize={{base:"12 px",md:"23px",lg:"26px"}} fontWeight="500">Starting Price : ₹ 1.2 Cr</Text>
                            <br />
                            <Button className="ExploreBtn" colorScheme={"#F6AD55"}>Payment</Button>
                    </Box>
               </SimpleGrid>
        </Box>
    )
}