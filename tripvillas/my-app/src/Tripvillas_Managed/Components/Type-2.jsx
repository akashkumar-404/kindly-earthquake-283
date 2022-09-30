import { Box, Container, Divider, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Type_2(){
    return(
        <Container maxW={{base:"100%",md:"95%",lg:"90%"}} textAlign="center" m={"auto"}>
            <br />
            <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight="700" padding={"1rem"} >Type : 3 BHK White Villas, Sahapur</Text>
            <br />
            <Divider/>
            <br />
            <SimpleGrid columns={[3,6,6]} gap="10px">
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>3</Text>
                    <Text color={"grey"}>Bedrooms</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>3</Text>
                    <Text color={"grey"}>Bathrooms</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>1300</Text>
                    <Text color={"grey"}>Sq Ft.</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>₹ 1.2 Cr</Text>
                    <Text color={"grey"}>Indicative Price</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>NA</Text>
                    <Text color={"grey"}>Target Yield</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>6.66%</Text>
                    <Text color={"grey"}>Target Net IRR</Text>
                </Box>
            </SimpleGrid>
            <br />
              <SimpleGrid columns={[2,2,2]}>
                <Box>
                    <Image width={"100%"} src="https://i.ytimg.com/vi/W4YXfPHS2Ks/maxresdefault.jpg"/>
                </Box>
                <Box>
                    <Image src="https://projectcdn.99acres.com/project_data/23483/block1_59085/3D/23483_B1_1F1_3D.jpg"/>
                </Box>
              </SimpleGrid>
        </Container>
    )
}