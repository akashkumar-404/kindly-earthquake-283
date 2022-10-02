import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import {BsFacebook,BsInstagram,BsLinkedin}from "react-icons/bs";
import { FaTwitterSquare} from "react-icons/fa";

export default function FooterBlack(){
    const [mail,setmail]=useState("");
    const [state,setstate]=useState(false);
    const [show,setshow]=useState(false);

    const HandleSubscribe=()=>{
        setstate(true)
        setshow(true)
        
    }
    const handleEmailChanege=(e)=>{
       setmail(e.target.value)
       setshow(false);
    }
    return (
        <SimpleGrid border={"1px solid black"} padding="3rem" columns={[1,4,4]} background="RGBA(0, 0, 0, 0.87)" color={"white"} gap="20px">
               <Box>
                <Image width={"75%"} src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/img/logo.b01085f692cb.png"/>
                <br />
                <Text fontSize={"12px"}>Tripvillas offers verified, fully furnished holiday homes many of which come with resident caretakers. This allows you to holiday in comfort, style and without rushing your holiday.</Text>
                <br />
                <Flex gap={"10px"} color="#38B2AC" fontSize={"25px"}>
                      <BsFacebook/>
                      <FaTwitterSquare/>
                      <BsLinkedin/>
                      <BsInstagram/>
                </Flex>
               </Box>
    
               <Box>
               <Text fontSize={"25px"}>Incredible Offers on the Best Villas</Text>
               <br />
                  <Box width={"100%"}>
                    <Text fontSize="10px">Enter your E-mail Address</Text>
                    <input type="email" value={mail} style={{background:"black"}} onChange={(e)=>handleEmailChanege(e) }/>
                    <Text fontSize="10px" color={"grey"}>*We Never Send Spam</Text>
                  </Box>
                  { state && <Text>{ show && mail.length>0?"Subscribed Successfully":"Fill E-mail Address Correctly"}</Text>}
                  <br />
                  <Button background={"#38B2AC"} colorScheme={"#38B2AC"} onClick={HandleSubscribe}>Subscribe</Button>
               </Box>

               <Box>
                <Text fontSize={"12px"}>About Us</Text>
                <Text fontSize={"12px"}>Privacy Policy</Text>
                <Text fontSize={"12px"}>Terms of Use</Text>
                <Text fontSize={"12px"}>FAQs</Text>
                <Text fontSize={"12px"}>Contact Us</Text>
                <Text fontSize={"12px"}>Property Managers</Text>
                <Text fontSize={"12px"}>Holiday Communities</Text>
               </Box>

               <Box>
                <Text fontSize={"25px"}>Have Questions?</Text>
                <Text fontSize={"25px"} color={"#38B2AC"}>support@tripvillas.com</Text>
                <br />
                <SimpleGrid maxW={"80%"} m="auto" columns={[2,1,2]} gap="5px">
                    <Box>
                        <Image src="https://d2vcelvjdj7n25.cloudfront.net/static/images/playstore.png"/>
                    </Box>
                    <Box>
                        <Image src="https://d2vcelvjdj7n25.cloudfront.net/static/images/appstore.png"/>
                    </Box>

                </SimpleGrid>
               </Box>
        </SimpleGrid>
    )
}