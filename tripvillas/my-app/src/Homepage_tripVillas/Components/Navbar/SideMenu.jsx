
import { HamburgerIcon } from "@chakra-ui/icons";
import style from "./NavBar.module.css"

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Heading,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const HamBurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <HamburgerIcon className={style.hamburgerIcon} fontSize={"24px"} ref={btnRef} onClick={onOpen} />

      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"#333"} color="white">
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody textAlign={"center"}>
            <Flex marginBottom="12px" flexDirection={"column"}>
              <Heading paddingBottom={"12px"} size={"xs"}>
                {" "}
                ARE YOU A PROPERTY OWNER/MANAGER?
              </Heading>
              <Link onClick={() => onClose()} className={style.linkText} to="/">
                List New Property
              </Link>
              <Link onClick={() => onClose()} className={style.linkText} to="/">
                Sign In To Your Dashboard
              </Link>
            </Flex>
            <hr />
            <Flex
              marginTop="42px"
              paddingTop={"54px"}
              flexDirection={"column"}
              padding={"0 42px"}
              marginBottom="12px"
            >
              <Heading paddingBottom={"12px"} size={"xs"}>
                HOLIDAY HOMES FOR SALE
              </Heading>
              <Link onClick={() => onClose()} className={style.linkText} to="/tripvillas-managed">
                Tripvillas Managed
                <br />
                Homes from A grade developers. Rentals guaranteed
              </Link>
              <Link onClick={() => onClose()} className={style.linkText} to="/">
                Marketplace <br />
                See what homes are up for sale from different property owners.
              </Link>
            </Flex>
            <hr />
            <Flex
              marginTop="42px"
              paddingTop={"54px"}
              flexDirection={"column"}
              padding={"0 42px"}
              marginBottom="12px"
            >
              <Link
                onClick={() => onClose()}
                className={style.linkText}
                to="/about-us"
              >
                About Us
              </Link>{" "}
              <Link
                onClick={() => onClose()}
                className={style.linkText}
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link onClick={() => onClose()} className={style.linkText} to="/">
                Terms of Use
              </Link>
              <Link onClick={() => onClose()} className={style.linkText} to="/">
                FAQs
              </Link>
              <Link onClick={() => onClose()} className={style.linkText} to="/">
                Contact Us
              </Link>
            </Flex>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
