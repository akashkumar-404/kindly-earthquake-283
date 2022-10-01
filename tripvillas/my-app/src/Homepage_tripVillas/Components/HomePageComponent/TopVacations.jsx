import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import style from "./homepage.module.css";
import "./swiper.css"
import { Link } from "react-router-dom";
const TopVacations = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://shrouded-tor-13668.herokuapp.com/topDestinations")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    gap:24,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box  width="100%" margin={"64px 0"}>
      <Text fontSize={"24px"} margin="24px 0" marginLeft="54px" color="gray">
        TOP DESTINATIONS
      </Text>
      <Slider {...settings} >    
       

          {data?.map((slide) => {
            console.log(slide);
            return (

              <Link to={"/" + slide.location} key={slide.id}>
                <Box className={style.slideBox}>
                  <Image width="100%" height="200px" src={slide.img} />
                  <Text className={style.slideText}>
                    {slide.location}
                    <br />
                    {slide.text}
                  </Text>
                </Box>
              </Link>
            );
          })}
          {/* </Flex> */}

      </Slider>
    </Box>
  );
};

// Import Swiper styles

// import "./styles.css";

export default TopVacations;
