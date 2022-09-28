import { Box, Container, Text ,Divider } from "@chakra-ui/react";
import "./Managed.css"

export default function About(){
    return(
        <Container maxW={{base:"95%",md:"90%"}} m="auto" textAlign={"center"}>
         <Box maxW={{base:"95%",md:"95%"}} m="auto">
            <Text className="About-Question" fontSize={{base:"20px",md:"30px",lg:"35px"}}>Why Invest In A Holiday Home Through Tripvillas?</Text>
            <Text fontSize={{base:"12px",md:"13px",lg:"16px"}}>Tripvillas is the leading specialist in Resort Real estate investments. We are strong believers that vacation homes offer both strong appreciation and significant yield. Please see below some options or feel free to write to us on passiveincome@tripvillas.com to get further information on currently open opportunities.</Text>
            </Box>
            <br />
            <Divider />
            <br />
        </Container>
    )
}