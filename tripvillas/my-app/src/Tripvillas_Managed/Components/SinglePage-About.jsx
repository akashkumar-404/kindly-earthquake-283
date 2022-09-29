import { Box, Container, Divider, Grid, GridItem, Text } from "@chakra-ui/react";

export default function SingleAbout_1(){
    return(
        <Container maxW={{base:"100%",md:"95%",lg:"90%"}} m="auto" textAlign={"center"}>
            <Text fontSize={{base:"20px",md:"35px",lg:"40px"}} fontWeight="700" padding={"1rem"}>About This Project</Text>
            <Box>
              <Text>Close to Mumbai, The White Villas Kasara, a project by Wealth Zone and SAVV, makes living in a spacious bungalow not just imaginable but possible. Flooded with natural light, the G + 1 R.C.C. villas with 20 feet high living rooms, spacious bedrooms with balconies attached to the master bedrooms, embody royalty. The individual terraces spare enough space for you to spend cozy fun moments with your family.</Text>
            </Box>
            <br />
            <Box>
                <Text>Every close to the project is the beautiful Ashoka waterfalls – a place for you to relax and unwind. A number of hospitals, schools, colleges, ATMs, supermarkets, resorts, fast food joints, restaurants, banks, hotels, petrol pumps, malls, temples, and gyms are also located within a close vicinity of the project. We chose this site particularly to get you the best ecosystem along with the necessary utilities to make your villa a home.</Text>
            </Box>
            <br />
            <Text fontSize={{base:"20px",md:"25px",lg:"30px"}} fontWeight="700" padding={"1rem"} >Phase 1</Text>
            <br />
            <Divider/>
            <br />
            <Grid templateColumns={{base:"repeat(2,1fr)", md:"repeat(3,1fr)", lg:"repeat(3,1fr)"}}>
                <GridItem colSpan={{base:'2',md:"1"}}> 
                <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>P51700018232</Text>
                <Text color={"grey"}>RERA Registration</Text>
                </GridItem>
                <GridItem> 
                <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>Dec 2020</Text>
                <Text  color={"grey"}>Date Of Completion</Text>
                </GridItem>
                <GridItem> 
                <Text  fontSize={{base:"15px",md:"20px",lg:"25px"}}>45</Text>
                <Text  color={"grey"}>Total Homes</Text>
                </GridItem>
            </Grid>
        </Container>
    )
}