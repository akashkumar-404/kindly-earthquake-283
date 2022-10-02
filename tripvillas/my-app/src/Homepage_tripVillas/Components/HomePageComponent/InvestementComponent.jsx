import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";

const InvestementComponent = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    return navigate("/tripvillas-managed");
  };
  return (
    <div>
      <Card>
        <Text fontSize={"24px"}>Holiday Home Investment Opportunities</Text>

        <SimpleGrid padding={"24px 0"} gap={4} columns={[1, 1, 2, 4]}>
          <Flex
            margin={"auto"}
            width={"150px"}
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              width={"35px"}
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/growth.svg"
            />
            <Text textAlign="center" fontSize={"14px"}>
              Low Cost High Appreciation
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
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/maids.svg"
            />
            <Text textAlign="center" fontSize={"14px"}>
              Professionally Managed
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
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/give-money.svg"
            />
            <Text textAlign="center" fontSize={"14px"}>
              Guaranteed To Produce Income
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
              src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/plan.svg"
            />
            <Text textAlign="center" fontSize={"14px"}>
              We Designed Floor Plans
            </Text>
          </Flex>
        </SimpleGrid>
        <Flex justifyContent={"center"} margin="34px 0">
          <Button onClick={() => handleRedirect()} colorScheme={"blue"}>
            EXPLORE INVESTMENT OPPORTUNITIES
          </Button>
        </Flex>
      </Card>
    </div>
  );
};

export default InvestementComponent;
