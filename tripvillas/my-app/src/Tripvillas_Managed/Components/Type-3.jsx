import { Box, Container, Divider, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Type_3(){
    return(
        <Container maxW={{base:"100%",md:"95%",lg:"90%"}} textAlign="center" m={"auto"}>
            <br />
            <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight="700" padding={"1rem"} >Type : Kenisha Holiday Homes</Text>
            <br />
            <Divider/>
            <br />
            <SimpleGrid columns={[3,6,6]} gap="10px">
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>2</Text>
                    <Text color={"grey"}>Bedrooms</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>2</Text>
                    <Text color={"grey"}>Bathrooms</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>1000</Text>
                    <Text color={"grey"}>Sq Ft.</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>₹ 45 Lacks</Text>
                    <Text color={"grey"}>Indicative Price</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>NA</Text>
                    <Text color={"grey"}>Target Yield</Text>
                </Box>
                <Box>
                    <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>9.66%</Text>
                    <Text color={"grey"}>Target Net IRR</Text>
                </Box>
            </SimpleGrid>
            <br />
              <SimpleGrid columns={[2,2,2]} gap="10px">
                <Box>
                    <Image width={"100%"} height={"74%"} src="https://www.holidayhometimes.com/wp-content/uploads/2021/08/Kenisha-Insta.jpeg"/>
                </Box>
                <Box>
                    <Image src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/339806788.jpg?k=9de57976665e0ede560dc956faad2591d662bc477c010e96dfa96af0912814ab&o="/>
                </Box>
              </SimpleGrid>
        </Container>
    )
}