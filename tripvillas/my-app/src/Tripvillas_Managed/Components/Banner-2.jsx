import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";

export default function Banner_Sahapur(){
    return(
        <Box className="Banner-box"backgroundImage='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16722/photo_1024/d9d86936f1a311e9924e0a8e1b1ce4da_photo_1024.jpeg' maxW={{base:"100%",md:"100%"}} padding={{base:"1rem",md:"2rem",lg:"2.5rem"}} backgroundPosition="center">
             <Text fontSize={{base:"30px",md:"45px",lg:"65px"}} fontWeight="700">The White Villas, Sahapur</Text>
             <Text fontSize={{base:"20px",md:"25px",lg:"35px"}} >Project By St. Angelo's VNCT Ventures</Text>
             <Text fontSize={{base:"15px",md:"18px",lg:"25px"}} width="85%" margin={"auto"}>The White Villas Sahapur,  Shahapur Village Kalam, Near Atgaon Station, Taluka - Shahapur, Behind Midway Park Resort, 420601 Shāhāpur, India</Text>
             <br />
             <Divider/>
             <br />
             <SimpleGrid columns={[2,2,4]} background="ThreeDLightShadow" gap={"10px"}>
             <Box>
                        <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>₹ 1.2 Cr</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Starting Price</Text>
                    </Box>
                    <Box  >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>109+</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Homes In A Community</Text>
                    </Box>
                    <Box >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>NA%</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Target Yield</Text>
                    </Box>
                    <Box >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>11.25%</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Target 7 Year IRR</Text>
                    </Box>
             </SimpleGrid>
        </Box>
    )
}