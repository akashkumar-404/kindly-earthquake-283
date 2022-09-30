import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";

export default function Banner_Kenisha(){
    return(
        <Box className="Banner-box"backgroundImage='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg' maxW={{base:"100%",md:"100%"}} padding={{base:"1rem",md:"2rem",lg:"2.5rem"}} backgroundPosition="center">
             <Text fontSize={{base:"30px",md:"45px",lg:"65px"}} fontWeight="700">Kenisha Holiday Homes Pali Khopoli Road</Text>
             <Text fontSize={{base:"20px",md:"25px",lg:"35px"}} >Community Managed By Tripvillas In Pawasalwadi, Maharashtra</Text>
             <Text fontSize={{base:"15px",md:"18px",lg:"25px"}} width="85%" margin={"auto"}>Beautifully Designed Designer Villas Off The Mumbai Pune Expressway. Very Close To Adlabs Imagica.</Text>
             <br />
             <Divider/>
             <br />
             <SimpleGrid columns={[2,2,4]} background="ThreeDLightShadow" gap={"10px"}>
             <Box>
                        <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>₹ 45 Lacks</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Starting Price</Text>
                    </Box>
                    <Box  >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>150+</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Homes In A Community</Text>
                    </Box>
                    <Box >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>NA%</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Target Yield</Text>
                    </Box>
                    <Box >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>12.75%</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Target 7 Year IRR</Text>
                    </Box>
             </SimpleGrid>
        </Box>
    )
}