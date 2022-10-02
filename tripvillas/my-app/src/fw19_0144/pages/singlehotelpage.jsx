import { Alert, Box, Button, Img, Input, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetData_fw19_0144 } from '../../Redux/AppReducer/action'
import Navbar from '../components/navbar'
import {FiCamera} from 'react-icons/fi';
import {FaRegComment} from 'react-icons/fa'
import {HiOutlineInformationCircle} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'

const Singlehotelpage = () => {
    const {id}=useParams()
    const [data,setData]=useState([])
    
    const getData=async()=>{
        return axios.get(`https://serene-sands-22517.herokuapp.com/hotels/${id}`)
        .then((r)=>{
            return setData(r.data)
        })
        .catch((e)=>{

        })
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data)

    const alerting=()=>{
        alert('Your request has been captured our executive will get back to you shortly')
    }
  return (
    <>
    <Navbar />
    <Box margin='auto'  width='5xl' height='filled' display='flex'>
        <Box  width='60%'>
        <Text fontSize='45px' className='.fonts' color='#494949;' marginTop='20' fontWeight='200'>{data.name}</Text>
        <Box display='flex'>
            <Box width='150px' backgroundColor='teal.300' color='whiteAlpha.900'  display='flex' justifyContent='space-around' height='40px' px='9' >
                <div style={{marginTop:'12px'}}><FiCamera ></FiCamera></div>
                <div style={{marginTop:'8px'}}>Photos</div>
                </Box>
            <Box width='150px'  borderLeft='1px solid silver' color='#494949' backgroundColor='gray.100'  display='flex' justifyContent='space-around' height='40px' px='6' fontSize='12px'>
                <div style={{marginTop:'12px'}}><FaRegComment></FaRegComment></div>
                <div style={{marginTop:'8px'}}>TripVilla Opinion</div>
                </Box>
            <Box width='150px' borderLeft='1px solid silver'  backgroundColor='gray.100'  color='#494949' display='flex' justifyContent='space-around' height='40px' px='4' fontSize='12px'>
                <div style={{marginTop:'12px'}}><HiOutlineInformationCircle></HiOutlineInformationCircle></div>
                <div style={{marginTop:'8px'}}>About this Property</div></Box>
            <Box width='150px'  borderLeft='1px solid silver'  backgroundColor='gray.100'  color='#494949'  display='flex' justifyContent='space-around' height='40px' px='5' fontSize='12px'>
                <div style={{marginTop:'12px'}}><GoLocation></GoLocation></div>
                <div style={{marginTop:'8px'}}>Location</div></Box>
        </Box>
        <br></br>
        <Img src={data.img} width='100%'/>
        <br></br>
        <br></br>
        <Box display='flex' fontSize='10px' >
        <div style={{width:'50%',border:'1px solid silver',color:'#9faaa8',fontWeight:'bold'}} className="font">
           
        <TableContainer>
  <Table size='sm'>
    <Tbody>
        <Tr>
            <Td>Number Of Bedrooms</Td>
        </Tr>
        <Tr>
            <Td>Number Of Bathrooms</Td>
        </Tr>
        <Tr>
            <Td>Number Of Balconies</Td>
        </Tr>
        <Tr>
            <Td>Square Footage</Td>
        </Tr>
        <Tr>
            <Td>Indicative Price</Td>
        </Tr>
        <Tr>
            <Td>Sale Type</Td>
        </Tr>
        <Tr>
            <Td>Property Type</Td>
        </Tr>
        <Tr>
            <Td>Management Service</Td>
        </Tr>
        <Tr>
            <Td>Furnishing</Td>
        </Tr>
        <Tr>
            <Td>Possession</Td>
        </Tr>
        <Tr>
            <Td>RERA links</Td>
        </Tr>
    </Tbody>
    
    </Table></TableContainer>
    </div>
    <div style={{width:'50%',border:'1px solid silver',color:'#9faaa8'}}>
        <TableContainer>
  <Table size='sm'>
    <Tbody>
        <Tr>
            <Td>4</Td>
        </Tr>
        <Tr>
            <Td>4</Td>
        </Tr>
        <Tr>
            <Td>0</Td>
        </Tr>
        <Tr>
            <Td>10000sqft</Td>
        </Tr>
        <Tr>
            <Td>INR65000000 (INR6500.00/sqft)</Td>
        </Tr>
        <Tr>
            <Td>Primary (From Builder)</Td>
        </Tr>
        <Tr>
            <Td>Villa</Td>
        </Tr>
        <Tr>
            <Td>Professionally Managed</Td>
        </Tr>
        <Tr>
            <Td>Fully Furnished</Td>
        </Tr>
        <Tr>
            <Td>Ready To Move ()</Td>
        </Tr>
        <Tr>
            <Td>Information Not Available</Td>
        </Tr>
    </Tbody>
    
    </Table></TableContainer>
    </div>
    </Box>
    <br></br>
    <br></br>
    <Text className='font' fontSize='20px' fontWeight='light'>Features/Amenities</Text>
    <Box width='100%' backgroundColor='#f2f2f2' fontSize='12px' px='20px' py='20px'>
        <Box marginLeft='30px' color='#494949'>
        <li>Private Swimming Pool</li>
        <li>Pool Facing Bedroom</li>
        <li>Fully furnished with Vintage Furniture</li>
        <li>Portuguese Style Villa</li>
        </Box>
    </Box>
    <br></br>
    <Text className='font' fontSize='20px' fontWeight='light'>About this Property</Text>
    <Box width='100%' backgroundColor='#f2f2f2' fontSize='12px' px='20px' py='20px'>
        <Box color='#494949'>
        <Text>
        This is 4 bedroom / 5 bathroom / Fully furnished / Ac bedrooms / Private swimming pool / 
        Private garden and parking space / Total land 10000/- square feet / bungalow area 3000 square feet / 
        prime location saligao North Goa / 3.5 km from the Famous beach Baga and Calangute / Prime Location Saligoa 
        North Goa.
        </Text>
        </Box>

    </Box>
    <br></br>
    <Text className='font' fontSize='20px' fontWeight='light'>Disclaimer</Text>
    <Box width='100%' backgroundColor='#f2f2f2' fontSize='12px' px='20px' py='10px'>
        <Box color='#494949'>
        <Text>
        Tripvillas endeavors to display on its platform(s), relevant information relating to a particular Property/Project 
        for the general informational purpose, including Property/project details, listings, floor area, location,
         maps etc. The details so published are based on the collection of information and data from multiple sources
          on best effort basis and should not be deemed to constitute advertisements, solicitations, marketing, offer 
          for sale, an invitation to offer, an invitation to acquire, by the developer/builder or any other entity. 
          The imagery used herein may not represent actuals or may be indicative of style only. No information given 
          creates a warranty or expands the scope of any warranty that cannot be disclaimed under applicable law. 
          Tripvillas is not responsible for any loss or damage including, without limitation, indirect or consequential 
          loss or damage, suffered by anyone due to use of or reliance on the content(s) of this site/App without
           independently verifying with the concerned developer/builder. Anyone using this site/app or relying on the 
           content(s) therein is doing so at his/her/it's sole risk and consequences without any recourse to Tripvillas.
            Tripvillas reserves the right to revoke, modify, alter, add and delete any one or more of the information 
            without any notification.
        </Text>
        </Box>
        
    </Box>
    </Box>
    <br></br>
    <Box  width='40%' className='font'>
    <Text  fontSize='40px' className='.fonts' color='#494949;' marginTop='20' fontWeight='200' textAlign='right'>{data.price}</Text>
    <Box  width='90%' fontSize='12px' marginLeft='40px' backgroundColor='#4d4d4d'  px='5' py='10' color='whiteAlpha.900'>
        <Box borderBottom='1px solid silver'>
    <Text fontSize='25px' className='.fonts' color='whiteAlpha.900'>Intrested in the property?</Text>
    </Box>
    <Box display='flex' justifyContent='space-between' >
        <Box width='45%'>
        <Text>First Name</Text>
        <Input backgroundColor='white' height='30px' borderRadius='0px' type='text' color='blackAlpha.900'></Input>
        </Box>
        <Box width='45%'>
        <Text>Last Name</Text>
        <Input backgroundColor='white' height='30px' borderRadius='0px' type='text' color='blackAlpha.900'></Input>
        </Box>
        
    </Box>
    <Box width='100%'>
    <Text>Email</Text>
        <Input backgroundColor='white' height='30px' borderRadius='0px' type='text' color='blackAlpha.900'></Input>
    </Box>
    <Box display='flex' justifyContent='space-between'>
        <Box width='25%'>
        <Text>Mobile Code</Text>
        <Input backgroundColor='white' height='30px' borderRadius='0px' type='number' color='blackAlpha.900'></Input>
        </Box>
        <Box width='70%'>
        <Text>Phone Number</Text>
        <Input backgroundColor='white' height='30px' borderRadius='0px' type='number' color='blackAlpha.900'></Input>
        </Box>
        
    </Box>
    <br></br>
    <Box textAlign='center'>
    <Button backgroundColor='teal' onClick={alerting} px='90px'>Request a call back</Button>
    </Box>
    </Box>
    </Box>
    </Box>
   
    </>
    
  )
}

export default Singlehotelpage