import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";

export default function Banner_tata_rio(){
    return(
        <Box className="Banner-box"backgroundImage='https://cf.bstatic.com/xdata/images/hotel/max1024x768/322875748.jpg?k=3b6da9ed409e0c54d61c65fed6751915c2b2a749420cd5e9545274738d86b78c&o=&hp=1' maxW={{base:"100%",md:"100%"}} padding={{base:"1rem",md:"3rem",lg:"4.5rem"}} backgroundPosition="center">
             <Text fontSize={{base:"30px",md:"45px",lg:"65px"}} fontWeight="700">Tata Housing Rio De Goa</Text>
             <Text fontSize={{base:"20px",md:"25px",lg:"35px"}} >Real estate developer in Chicalim, Goa</Text>
             <Text fontSize={{base:"15px",md:"18px",lg:"25px"}} width="85%" margin={"auto"}>Vidhyanagar Colony, Next to MES College, Dabolim, Goa 403726</Text>
             <br />
             <Divider/>
             <br />
             <SimpleGrid columns={[2,2,4]} background="ThreeDLightShadow" gap={"10px"}>
             <Box>
                        <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>₹ 49.9 Lacks</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Starting Price</Text>
                    </Box>
                    <Box  >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>200+</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Homes In A Community</Text>
                    </Box>
                    <Box >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>NA%</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Target Yield</Text>
                    </Box>
                    <Box >
                    <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight={"600"}>15.75%</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}}  fontWeight={"600"}>Target 7 Year IRR</Text>
                    </Box>
             </SimpleGrid>
        </Box>
    )
}