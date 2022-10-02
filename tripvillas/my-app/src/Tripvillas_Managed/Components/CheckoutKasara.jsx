import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function CheckoutKasara(){
    return(
        <Box width={"80%"} textAlign="center" >
               <SimpleGrid columns={[1,2,2]} width={"90%"} m="auto" alignItems={"center"} gap="10px">
                    <Box  width="100%" height={"100%"}><Image src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproject/photos/big-image/21/img-20180816-wa0012_big_image.jpeg"/></Box>
                    <Box  width="100%">
                            <Text fontSize={{base:"15px",md:"28px",lg:"32px"}} fontWeight="500">The White Villas, Kasara</Text>
                            <Text fontSize={{base:"10px",md:"16"}}>The White Villas Kasara S.N 2/1A, S.N. 3/2, Kasara Bk, Thane, Maharashtra 421</Text>
                            <Text fontSize={{base:"12 px",md:"23px",lg:"26px"}} fontWeight="500">Starting Price : ₹ 66 Lakhs</Text>
                            <br />
                            <Button className="ExploreBtn" colorScheme={"#F6AD55"}>Payment</Button>
                    </Box>
               </SimpleGrid>
        </Box>
    )
}