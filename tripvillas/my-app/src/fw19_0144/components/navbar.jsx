
import { background, Button, color, Flex, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

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
        justify="space-around"
        bg="white.900"
        borderBottom="1px solid grey"
        color="blackAlpha.900"
        width="100%"
        fontSize="14px"
        // border='1px solid red'
      >
        
        <Flex alignItems="center" wrap="wrap">
          <Flex flexGrow={1} justify="center" /*border='1px'*/>
            
          <Popover>
  <PopoverTrigger onClick>
    <Button backgroundColor={"transparent"}  _hover={{ bg: 'transparent' }}>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow backgroundColor={"black"} />
    <PopoverBody backgroundColor={"black"} color={"whiteAlpha.900"}  _hover={{ bg: 'teal.400' }}>
        <h3>TripVillas</h3>
        <p>Homes for great Developers,rental and guranteed</p>
    </PopoverBody>
    <PopoverBody backgroundColor={"black"} color={"whiteAlpha.900"}  _hover={{ bg: 'teal.400' }}>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover> 
          </Flex>
</Flex>
</Flex>
    </div>
  )
}

export default Navbar