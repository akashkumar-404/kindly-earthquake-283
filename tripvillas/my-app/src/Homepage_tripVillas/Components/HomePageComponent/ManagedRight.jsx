import { Box, Grid, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./homepage.module.css";
const ManagedRight = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://shrouded-tor-13668.herokuapp.com/bodySection")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(data);
  return (
    <SimpleGrid columns={[1, 1, 2, 4]} gap="12px">
      {data.map((item) => {
        return (
          <Box>
            <Link to={"/" + item.name} key={item.id}>
              <Box className={style.slideBox}>
                <Image width="100%" height="200px" src={item.img} alt="image" />
                <Text className={style.slideText}>
                  {item.location}
                  <br />
                </Text>
              </Box>
            </Link>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default ManagedRight;
