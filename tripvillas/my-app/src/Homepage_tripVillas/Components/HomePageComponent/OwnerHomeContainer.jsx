import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Card from "../Card";

const OwnerHomeContainer = () => {
  return (
    <div>
      <Card width="auto">
        <Text fontSize={"24px"}>Holiday Home Investment Opportunities</Text>
        <SimpleGrid
          padding={"24px 0"}
          alignItems="center"
          gap={4}
          columns={[1, 1, 2, 4]}
        >
          <Flex
            margin={"auto"}
            width={"150px"}
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              width={"35px"}
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/network.svg"
            />
            <Text textAlign="center" fontSize={"14px"}>
              Get Bookings From 100+ Websites
            </Text>
          </Flex>
          <Flex
            margin={"auto"}
            width={"150px"}
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              width={"35px"}
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/layout.svg"
            />
            <Text textAlign="center" fontSize={"14px"}>
              One Dashboard - Total Control
            </Text>
          </Flex>
          <Flex
            margin={"auto"}
            width={"150px"}
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              width={"35px"}
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/flash.svg"
            />
            <Text textAlign="center" fontSize={"14px"}>
              Instant Book Or Request To Book
            </Text>
          </Flex>
          <Flex
            margin={"auto"}
            width={"150px"}
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              width={"35px"}
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/smartphone-call.svg"
            />
            <Text textAlign="center" fontSize={"14px"}>
              Both iOS & Android App Available.
            </Text>
          </Flex>
        </SimpleGrid>
        <Flex justifyContent={"center"} margin="34px 0">
          <Button colorScheme={"blue"}>LIST YOUR PROPERTY</Button>
        </Flex>
      </Card>
    </div>
  );
};

export default OwnerHomeContainer;
