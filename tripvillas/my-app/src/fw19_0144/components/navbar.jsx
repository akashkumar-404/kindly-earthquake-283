
import { background, Box, Button, color, Flex, Img, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Logo from '../utils/Logo.png'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div >
    {/* <Popover>
  <PopoverTrigger onClick>
    <Button backgroundColor={"transparent"}  _hover={{ bg: 'transparent' }}>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow backgroundColor={"black"} />
    <PopoverBody backgroundColor={"black"} color={"whiteAlpha.900"}  _hover={{ bg: 'teal.400' }}>Are you sure you want to have that milkshake?</PopoverBody>
    <PopoverBody backgroundColor={"black"} color={"whiteAlpha.900"}  _hover={{ bg: 'teal.400' }}>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover> */}
      <Flex
        py={2}
        px={4}
        direction={["column", "row"]}
        justify="space-between"
        bg="white.900"
       
        color="blackAlpha.900"
        width="100%"
        height="50px"
        fontSize="14px"
         boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}
      >
        <Box>
        <Img src={Logo} width="130px" marginTop={'10px'}/>
        </Box>
        
        <Flex  wrap="wrap" justify={'space-between'} >
             
          <Flex flexGrow={1}   paddingRight={'40px'}  width={'100'} >
         
          <Popover >
  <PopoverTrigger >
    <Button backgroundColor={"transparent"} marginRight='20px' _hover={{ bg: 'transparent' }} fontSize='1l'>Holiday Home for Sale</Button>
  </PopoverTrigger>
  <PopoverContent width={'140px'} >
    <PopoverArrow backgroundColor={"black"} />
    <PopoverBody backgroundColor={"black"} color={"whiteAlpha.900"}  _hover={{ bg: 'teal.400' }} >
        <h3>TripVillas</h3>
        <p style={{fontSize:'10px'}}>Homes for great Developers,rental and guranteed</p>
    </PopoverBody>
    <PopoverBody backgroundColor={"black"} color={"whiteAlpha.900"}  _hover={{ bg: 'teal.400' }}>
    <h3>MarketPlace</h3>
        <p style={{fontSize:'10px'}}>Homes for great Developers,rental and guranteed</p>
    </PopoverBody>
  </PopoverContent>
  <Button height={'8'} marginTop='5px' backgroundColor={'red.600'} _hover={{bg:'red.400',borderRadius:'15px'}} fontSize='10px'>Host</Button>
</Popover> 
          </Flex>
</Flex>

</Flex>
    </div>
  )
}

export default Navbar