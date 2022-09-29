import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"


export default function QandA(){
    return(
        <SimpleGrid columns={[1,1,2]} m={"auto"} maxW={{base:"90%",md:"90%"}} gap={"10px"}>
            <Box className="QandA-box"  maxW={{base:"90%",md:"95%",lg:"95%"}} shadow={"md"}>
                <Image className="QandA-image" src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/irr.svg"/>
                <Text className="QandA-box-text-l" fontSize={{base:"20px",md:"23px",lg:"26px"}}>What Is IRR?</Text>
                <Text className="QandA-box-text-s">The total return from the property on an annual basis considering the property is sold after 7 years of the initial investment - this captures the total income to you from both rentals and appreciation of the property.</Text>
            </Box>
            <Box className="QandA-box"  maxW={{base:"90%",md:"95%",lg:"95%"}} shadow={"md"}>
                <Image className="QandA-image" src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/irr.svg"/>
                <Text className="QandA-box-text-l" fontSize={{base:"20px",md:"23px",lg:"28px"}}>What Is Yield?</Text>
                <Text className="QandA-box-text-s">The rental income generated from the property as a %age of its total purchase price inclusive of Interior Costs, Registration and Stamp Duties after deducting all Operating costs, Commissions and Home Owner Association Fees.</Text>
            </Box>
             </SimpleGrid>
    )
}