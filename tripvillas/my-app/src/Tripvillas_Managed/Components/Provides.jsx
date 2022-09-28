import { Box, Divider, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "./Managed.css";

export default function Provides(){
    return(
        <>
        <SimpleGrid m={"auto"} maxW={{base:"95%",md:"90%"}} columns={[1,1,4]} gap={"10px"}>
            <Box className="Provides-box"  maxW={{base:"90%",md:"95%",lg:"95%"}}>
                <Image className="provides-image" src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/growth.svg" alt="LCHA"/>
                <Text className="Provides-box-text-l" fontSize={{base:"18px",md:"20px",lg:"23px"}}>Low Cost High Appreciation</Text>
                <Text className="Provides-box-text-s">Vacation Homes start at $30,000 - (~20Lakhs Indian Rupees). Given that these are upcoming towns or well established holiday destinations they offer significant potential for capital appreciation.</Text>
            </Box>
            <Box className="Provides-box"  maxW={{base:"90%",md:"95%",lg:"95%"}}>
                <Image className="provides-image" src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/maids.svg" alt="LCHA"/>
                <Text className="Provides-box-text-l" fontSize={{base:"18px",md:"20px",lg:"23px"}}>Professionally Managed</Text>
                <Text className="Provides-box-text-s">All Communities have highly skilled on-site teams to ensure the community is well managed, your investment is easy to monitor and the asset is performing.</Text>
            </Box>
            <Box className="Provides-box" maxW={{base:"90%",md:"95%",lg:"95%"}}>
                <Image className="provides-image" src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/give-money.svg" alt="LCHA"/>
                <Text className="Provides-box-text-l" fontSize={{base:"18px",md:"20px",lg:"23px"}}>Guaranteed To Produce Income</Text>
                <Text className="Provides-box-text-s">Primarily through short term rentals. We generate bookings through 75+ of the worlds largest online travel agents.</Text>
            </Box>
            <Box className="Provides-box" maxW={{base:"90%",md:"95%",lg:"95%"}}>
                <Image className="provides-image" src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/shield.svg" alt="LCHA"/>
                <Text className="Provides-box-text-l" fontSize={{base:"18px",md:"20px",lg:"23px"}}>Safe And Secure</Text>
                <Text className="Provides-box-text-s">All Opportunities are in Gated Communities with top quality security and detailed documented agreements and governance processes.</Text>
            </Box>
        </SimpleGrid>
        <br />
        <Divider width={"90%"} m="auto"/>
        <br />
        </>
    )
}