import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Sahapur_Photos(){
    return(
    <>
    <Text textAlign={"center"} fontSize={{base:"20px",md:"35px",lg:"40px"}} fontWeight="700" padding={"1rem"}>Photos</Text>
        <SimpleGrid columns={[3,3,3]} maxW="90%"m={"auto"}>
            <Box>
            <Image width={"100%"} height={"100%"} src="https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16722/photo_1024/d9d86936f1a311e9924e0a8e1b1ce4da_photo_1024.jpeg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16722/photo_1024/d9d86937f1a311e9924e0a8e1b1ce4da_photo_1024.jpeg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://www.synergy.properties/wp-content/uploads/2016/06/WhiteVillas_clubhouse.jpg"/>
            </Box>
               
            <Box>
            <Image width={"100%"} height={"100%"} src="https://vnctglobal.com/wp-content/uploads/2020/01/WhatsApp-Image-2020-07-16-at-11.41.44.jpeg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://img.staticmb.com/mbimages/project/Photo_h310_w462/2021/01/21/Project-Photo-30-Royal-Villas-Thane-5190367_600_800_310_462.jpg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://cf.bstatic.com/images/hotel/840x460/343/343645778.jpg"/>
            </Box>
        </SimpleGrid>
        <br />
        </>
    )
}