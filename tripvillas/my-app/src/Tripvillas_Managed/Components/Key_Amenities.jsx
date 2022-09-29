import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export default function KeyAmenities(){
    return(
        <>
        <br />
        <Text fontSize={{base:"20px",md:"35px",lg:"40px"}} fontWeight="700" padding={"1rem"} textAlign={"center"}>Key Amenities</Text>
        <SimpleGrid maxW={{base:"100%",md:"95%",lg:"90%"}} m="auto" textAlign={"center"}columns={[1,1,4]} gap="20px">
           <Box width="90%" m={"auto"} shadow="md">
              <Text>A balcony and an individual villa terrace</Text>
            </Box>
            <Box  width="90%"  m={"auto"} shadow="md">
              <Text>A large exclusive car parking</Text>
            </Box>
            <Box  width="90%"  m={"auto"} shadow="md">
              <Text>An RO water purification plant</Text>
            </Box>
            <Box  width="90%"  m={"auto"} shadow="md">
              <Text>Beautifully landscaped garden</Text>
            </Box>
            <Box  width="90%"  m={"auto"} shadow="md">
              <Text>A strong security system</Text>
            </Box>
            <Box  width="90%"  m={"auto"} shadow="md">
              <Text>24X7 power backup</Text>
            </Box>
            <Box  width="90%"  m={"auto"} shadow="md">
              <Text>An independent overhead water tank</Text>
            </Box>
        </SimpleGrid>
        </>
    )
}