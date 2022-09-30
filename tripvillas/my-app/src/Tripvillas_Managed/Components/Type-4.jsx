import { Box, Container, Divider, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Type_4(){
    return(
        <Container maxW={{base:"100%",md:"95%",lg:"90%"}} textAlign="center" m={"auto"}>
            <br />
            <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight="700" padding={"1rem"} >Type : Tata Housing Rio De Goa</Text>
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
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>1200</Text>
                    <Text color={"grey"}>Sq Ft.</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>₹ 49.9 Lacks</Text>
                    <Text color={"grey"}>Indicative Price</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>NA</Text>
                    <Text color={"grey"}>Target Yield</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>10.86%</Text>
                    <Text color={"grey"}>Target Net IRR</Text>
                </Box>
            </SimpleGrid>
            <br />
              <SimpleGrid columns={[2,2,2]} gap="10px">
                <Box>
                    <Image width={"100%"} height={"95%"} src="https://cdn.shopify.com/s/files/1/0570/4794/1270/products/IMG-76-2.png?v=1644581695"/>
                </Box>
                <Box>
                    <Image src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproperty/photos/web-image/156/15-bhk-unit-plan_web_image.jpeg"/>
                </Box>
              </SimpleGrid>
        </Container>
    )
}