import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import style from "./homepage.module.css";
const Banner = () => {
  return (
    <Box w={[480, 767, 991, 1440]} className={style.homeBannar}>
      <Box className={style.bannarContent}>
        <Text className={style.bannerText}>
          Book <del>Hotels</del> Vacation Rentals
        </Text>
        <Text className={style.bannerText}>
          Top Holiday Homes - Villas, Apartments & Homestays
        </Text>
        <Box className={style.bannerFormBox}>
          <input
            type={"text"}
            className={style.bannerInput + " " + style.bannerInputLocation}
            placeholder="Location"
          />
          <input
            type="date"
            className={style.bannerInputDate + " " + style.bannerInput}
          />
          <input
            type="date"
            className={style.bannerInputDate + " " + style.bannerInput}
          />
          <select className={style.bannerInput}>
            <option>Select Guests</option>
            {new Array(10).fill(1).map((item, index) => {
              return (
                <option key={index} value={index + 1}>
                  {index + 1 == 1
                    ? index + 1 + " guest"
                    : index + 1 + " guests"}
                </option>
              );
            })}
          </select>
          <button className={style.bannerBtn + " " + style.bannerInput}>
            CHECKOUT
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
