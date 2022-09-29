import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Photos_1(){
    return(
    <>
    <Text textAlign={"center"} fontSize={{base:"20px",md:"35px",lg:"40px"}} fontWeight="700" padding={"1rem"}>Photos</Text>
        <SimpleGrid columns={[3,3,3]} maxW="90%"m={"auto"}>
            <Box>
            <Image width={"100%"} height={"100%"} src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproperty/photos/big-image/219/project-photo-4-white-villas-thane-5114885_500_850_big_image.jpeg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproject/photos/big-image/21/img-20180816-wa0012_big_image.jpeg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproject/photos/big-image/20/spa-10_big_image.jpeg"/>
            </Box>
               
            <Box>
            <Image width={"100%"} height={"100%"} src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproject/photos/big-image/21/1-11_big_image.jpeg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproject/photos/big-image/21/2-12_big_image.jpeg"/>
            </Box>

            <Box>
            <Image width={"100%"} height={"100%"} src="https://d2vcelvjdj7n25.cloudfront.net/media/saleproperty/photos/big-image/224/chalet2_big_image.jpeg"/>
            </Box>
        </SimpleGrid>
        <br />
        </>
    )
}