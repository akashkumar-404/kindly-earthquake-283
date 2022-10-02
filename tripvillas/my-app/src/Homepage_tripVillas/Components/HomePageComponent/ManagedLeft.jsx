import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Card from "../Card";

const ManagedLeft = () => {
  return (
    <Box >
      <Card width="100%">
        <Text fontSize="24px" marginLeft={"34px"}>
          {" "}
          Fully Managed Communities By Tripvillas
        </Text>
        <SimpleGrid margin={"64px 0"} gap={"12px"} columns={2}>
          <Flex flexDirection={"column"} alignItems="center">
            <Image
              width={"50px"}
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg"
            />
            <Text fontSize={"14px"}>High Quality housekeeping</Text>
          </Flex>
          <Flex flexDirection={"column"} alignItems="center">
            <Image
              width={"50px"}
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg"
            />
            <Text fontSize={"14px"}>Comfortable Linen and Toiletries</Text>
          </Flex>
          <Flex flexDirection={"column"} alignItems="center">
            <Image
              width={"50px"}
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg"
            />
            <Text fontSize={"14px"}>Quality Furniture & Fittings</Text>
          </Flex>
          <Flex flexDirection={"column"} alignItems="center">
            <Image
              width={"50px"}
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg"
            />
            <Text fontSize={"14px"}>Food Delivery Or Central Restaurant</Text>
          </Flex>
        </SimpleGrid>
      </Card>
    </Box>
  );
};

export default ManagedLeft;
