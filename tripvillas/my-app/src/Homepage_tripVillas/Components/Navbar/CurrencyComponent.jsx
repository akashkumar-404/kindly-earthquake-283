import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./NavBar.module.css";

const CurrencyComponent = () => {
  const [currency, setCurrency] = useState("INR");
  const handleChangeCurrency = (value) => {
    setCurrency(value);
  };
  const currencyData = [
    "AED",
    "AUD",
    "BRL",
    "CAD",
    "CHF",
    "CZK",
    "DKK",
    "EUR",
    "GBP",
    "HKD",
    "HUF",
    "ILS",
    "INR",
    "JPY",
    "MXN",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "TWD",
    "USD",
  ];
  return (
    <>
      <Menu>
        <MenuButton
          className={style.currMenuBtn}
          color={"White"}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          {currency}
        </MenuButton>
        <MenuList color={"black"}>
          <Grid templateColumns="repeat(3, 1fr)" gap={"12px"}>
            {currencyData.map((country) => {
              return (
                <GridItem key={country}>
                  <MenuItem onClick={() => handleChangeCurrency(country)}>
                    {country}
                  </MenuItem>
                </GridItem>
              );
            })}
          </Grid>
        </MenuList>
      </Menu>
    </>
  );
};

export default CurrencyComponent;
