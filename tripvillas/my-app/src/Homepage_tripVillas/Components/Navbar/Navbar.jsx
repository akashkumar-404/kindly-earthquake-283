import { Flex } from "@chakra-ui/react";
import React from "react";
import style from "./NavBar.module.css";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
const Navbar = () => {
  return (
    <>
    <Flex  w={[0]} className={style.navContainer}>
      <NavLeft />
      <NavRight />
    </Flex>
    </>
  );
};

export default Navbar;
