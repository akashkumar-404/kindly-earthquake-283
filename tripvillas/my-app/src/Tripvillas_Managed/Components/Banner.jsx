import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";

export default function Banner(){
    return(
        <Box className="Banner-box"backgroundImage='https://d2vcelvjdj7n25.cloudfront.net/media/saleproject/photos/big-image/21/unnamed_big_image.jpeg' maxW={{base:"100%",md:"100%"}} padding={{base:"1rem",md:"2rem",lg:"2.5rem"}}>
             <Text fontSize={{base:"30px",md:"45px",lg:"65px"}} fontWeight="700">The White Villas, Kasara</Text>
             <Text fontSize={{base:"20px",md:"25px",lg:"35px"}} >Project By St. Angelo's VNCT Ventures</Text>
             <Text fontSize={{base:"15px",md:"18px",lg:"25px"}} width="70%" margin={"auto"}>The White Villas Kasara S.N 2/1A, S.N. 3/2, Kasara Bk,Tal. Shahapur Dist.The, Thane, Maharashtra 421</Text>
             <br />
             <Divider/>
             <br />
             <SimpleGrid columns={[2,2,4]} background="ThreeDLightShadow" gap={"10px"}>
             <Box>
                        <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>₹ 66 Lakhs</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Starting Price</Text>
                    </Box>
                    <Box  >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>129+</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Homes In A Community</Text>
                    </Box>
                    <Box >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>NA%</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Target Yield</Text>
                    </Box>
                    <Box >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>12.25%</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Target 7 Year IRR</Text>
                    </Box>
             </SimpleGrid>
        </Box>
    )
}