import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
const Navbar = () => {
  let params = useLocation()
  console.log(params);
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
