import { Box, Container, Divider, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Type_1(){
    return(
        <Container maxW={{base:"100%",md:"95%",lg:"90%"}} textAlign="center" m={"auto"}>
            <br />
            <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight="700" padding={"1rem"} >Type : 3 BHK White Villas, Kasara</Text>
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
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>1700</Text>
                    <Text color={"grey"}>Sq Ft.</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>₹ 66 Lakhs</Text>
                    <Text color={"grey"}>Indicative Price</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>NA</Text>
                    <Text color={"grey"}>Target Yield</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>6.99%</Text>
                    <Text color={"grey"}>Target Net IRR</Text>
                </Box>
            </SimpleGrid>
            <br />
              <Flex>
                <Box>
                    <Image height={"80%"} src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproperty/photos/big-image/219/project-photo-4-white-villas-thane-5114885_500_850_big_image.jpeg"/>
                </Box>
                <Box>
                    <Image src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproperty/photos/big-image/219/floor-plan-2-white-villas-thane-5114885_429_971_big_image.jpeg"/>
                </Box>
              </Flex>
        </Container>
    )
}