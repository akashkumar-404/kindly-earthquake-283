import { Box, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import style from "./homepage.module.css";
import "./swiper.css"
const VacationIdeas = () => {
     const [data,setData] = useState([]);

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
     useEffect(()=>{
          axios.get("https://shrouded-tor-13668.herokuapp.com/vacationIdeas").then(res=>setData(res.data)).catch(e=>console.log(e));
     })
  return (
     <Box width="100%" margin={"64px 0"}>
      <Text fontSize={"24px"} margin="24px 0" marginLeft="54px" color="gray">
          VACATION IDEAS
      </Text>
      <Slider {...settings} >    
          {data?.map((slide) => {
            console.log(slide);
            return (
              <Link to={"/" + slide.text} key={slide.id}>
                <Box className={style.slideBox}>
                  <Image width="100%" height="200px" src={slide.img} />
                  <Text className={style.slideText}>
                    {slide.text}
                  </Text>
                </Box>
              </Link>
            );
          })}
      </Slider>
    </Box>
  )
}

export default VacationIdeas