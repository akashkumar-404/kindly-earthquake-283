import { Box, Button, Divider, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function CurrOpp(){
    return(
        <>
        <br />
        <SimpleGrid columns={[1,1,2]} gap="10px"  maxW={{base:"85%" ,md:"90%",lg:"85%"}} m="auto"shadow={"lg"} alignItems="center" >
            <Box  width={"70%"}>
               <Image width={"100%"} src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproject/photos/big-image/20/clubhouse-page-header_big_image.jpeg"/>
            </Box>
            <Box  width={{base:"100%",md:"130%",lg:"130%"}} marginLeft={{base:"0%",md:"-30%",lg:"-30%"}}  padding={"10px"}>
                 <SimpleGrid  columns={[1,1,2]} margin="auto">
                    <Box width={{base:"100%",md:"150%",lg:"150%"}}>
                        <Text fontSize={{base:"25px",md:"30px",lg:"35px"}} fontWeight={"600"}>Mangalyam Meadows</Text>
                        <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>Project By Dalal Gruh And Infra. Projects (DGIP)</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}} color="grey" fontWeight={"600"}>Mangalyam Meadows Chanvai Rabda Road, Chanvai Village, Nr. AXN Resort, via Atul, Valsad - 396020</Text>
                        <br />
                    </Box>
                    <Box className="Box-ExploreBtn" width={{base:"100%", md:"50%"}} marginLeft={{base:"0%",md:"50%",lg:"50%"}}>
                    <Button className="ExploreBtn" colorScheme={"#F6AD55"}>Explore</Button>
                    </Box>
                 </SimpleGrid>
                 <Divider/>
                 <br />
                 <SimpleGrid  columns={[2,2,4]}>
                    <Box >
                        <Text fontSize={{base:"25px",md:"30px",lg:"35px"}} fontWeight={"600"}>₹ 1.2 Cr</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}} color="grey" fontWeight={"600"}>Starting Price</Text>
                    </Box>
                    <Box  >
                    <Text fontSize={{base:"25px",md:"30px",lg:"35px"}} fontWeight={"600"}>129+</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}} color="grey" fontWeight={"600"}>Homes In A Community</Text>
                    </Box>
                    <Box >
                    <Text fontSize={{base:"25px",md:"30px",lg:"35px"}} fontWeight={"600"}>NA%</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}} color="grey" fontWeight={"600"}>Target Yield</Text>
                    </Box>
                    <Box >
                    <Text fontSize={{base:"25px",md:"30px",lg:"35px"}} fontWeight={"600"}>12.25%</Text>
                        <Text fontSize={{base:"15px",md:"18px",lg:"18px"}} color="grey" fontWeight={"600"}>Target 7 Year IRR</Text>
                    </Box>
                 </SimpleGrid>
                 <br />
                 <Text>Strategically located in the most well-connected yet nature surrounded city of Gujarat.</Text>
            </Box>
        </SimpleGrid>
        </>
    )
}