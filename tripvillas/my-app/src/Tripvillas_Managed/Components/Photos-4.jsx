import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Tata_Rio_Photos(){
    return(
    <>
    <Text textAlign={"center"} fontSize={{base:"20px",md:"35px",lg:"40px"}} fontWeight="700" padding={"1rem"}>Photos</Text>
        <SimpleGrid columns={[3,3,3]} maxW="90%"m={"auto"}>
            <Box>
            <Image width={"100%"} height={"100%"} src="https://media.tatarealty.in/galleries/March2020/0e717d99c8abe580d931.webp"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://media.tatarealty.in/projects/March2020/bc81ac5da5ea5dc59195.webp"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/286166191.jpg?k=202be6380b99684abc72a319be18a9baa63eb76bc9c73227fbbf152174de3cc4&o=&hp=1"/>
            </Box>
               
            <Box>
            <Image width={"100%"} height={"100%"} src="https://media.tatarealty.in/galleries/March2020/eb0eda4a7ac0c62a3ef3.webp"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/322875748.jpg?k=3b6da9ed409e0c54d61c65fed6751915c2b2a749420cd5e9545274738d86b78c&o=&hp=1"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://pix10.agoda.net/hotelImages/28129741/0/ccb586154f2a61e1c7b7c7adb59a7a61.png?ca=23&ce=0&s=1024x768"/>
            </Box>
        </SimpleGrid>
        <br />
        </>
    )
}