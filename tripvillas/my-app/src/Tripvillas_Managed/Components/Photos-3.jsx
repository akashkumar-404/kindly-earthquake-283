import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Kenisha_Holiday_Photos(){
    return(
    <>
    <Text textAlign={"center"} fontSize={{base:"20px",md:"35px",lg:"40px"}} fontWeight="700" padding={"1rem"}>Photos</Text>
        <SimpleGrid columns={[3,3,3]} maxW="90%"m={"auto"}>
            <Box>
            <Image width={"100%"} height={"100%"} src="https://gos3.ibcdn.com/9998ed200a5911ec9e970a58a9feac02.jpeg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202109071955384359-561-f1dcb08a0ae411ecb6030a58a9feac02.jpg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/317105850.jpg?k=feceb54df3f96993078113587c33ff41036a858ddbf5f521e0905fd6e1cef709&o="/>
            </Box>
               
            <Box>
            <Image width={"100%"} height={"100%"} src="https://newprojects.99acres.com/projects/kpin_real_estate_ventures/kpin_kenisha_holiday_homes/images/8zhw9rxs_med.jpg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://tripvillas-media.s3.amazonaws.com/media/property_photos/image_640x960/3273244/644b9570188011ec9b9e0aec6f97ea66_mob_thumbnail.jpg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://img.youtube.com/vi/euALJGYMiUY/hqdefault.jpg"/>
            </Box>
        </SimpleGrid>
        <br />
        </>
    )
}