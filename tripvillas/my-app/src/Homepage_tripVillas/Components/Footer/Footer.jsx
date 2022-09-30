import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";

const Footer = () => {
  const FooterLinks = [
    ["India", "3262 holiday homes"],
    ["Thailand", "1284 holiday homes"],
    ["Sri Lanka", "646 holiday homes"],
    ["Indonesia", "622 holiday homes"],
    ["Philippines", "378 holiday homes"],
    ["United Arab Emirates", "146 holiday homes"],
    ["Georgia", "102 holiday homes"],
    ["Turkey", "70 holiday homes"],
    ["Israel", "53 holiday homes"],
    ["Malaysia", "49 holiday homes"],
    ["Japan", "46 holiday homes"],
    ["Viet Nam", "37 holiday homes"],
    ["Cambodia", "26 holiday homes"],
    ["Nepal", "22 holiday homes"],
    ["Maldives", "19 holiday homes"],
    ["Taiwan, Province Of China", "17 holiday homes"],
    ["Hong Kong Special Administrative Region Of China", "16 holiday homes"],
    ["Republic Of Korea", "12 holiday homes"],
    ["Oman", "7 holiday homes"],
    ["Bangladesh", "5 holiday homes"],
  ];

  return (
    <Box padding={"24px 12px"}>
      <Grid templateColumns={"repeat(6, 1fr)"}  gap="8px">
        {FooterLinks.map((link) => {
          return (
            <GridItem key={link[0]}>
              <Link to={"/home"}></Link>
              <Link
                className={style.footerLink}
                to={link[0].split(" ").join("-")}
              >
                <Text>{link[0]}</Text>
                <Text>{link[1]}</Text>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Footer;
