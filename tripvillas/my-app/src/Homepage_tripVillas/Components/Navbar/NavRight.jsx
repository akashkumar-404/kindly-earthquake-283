import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import CurrencyComponent from "./CurrencyComponent";
import { HamBurgerMenu } from "./SideMenu";
import UserAccount from "./UserAccount";
const NavRight = () => {
  return (
    <Flex alignItems={"center"}>
      <Box>
        <UserAccount />
      </Box>
      <Box>
        <CurrencyComponent />
      </Box>

      <HamBurgerMenu />
    </Flex>
  );
};

export default NavRight;
