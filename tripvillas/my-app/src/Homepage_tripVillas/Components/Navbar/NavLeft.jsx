import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import style from "./NavBar.module.css"
const NavLeft = () => {
  return (
    <Box>
     <Image className={style.Logo} src='https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png' />
    </Box>
  )
}

export default NavLeft