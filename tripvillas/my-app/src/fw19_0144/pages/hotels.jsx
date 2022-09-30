import { Box, Button, Grid, GridItem, Img, Select, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetData_fw19_0144 } from '../../Redux/AppReducer/action'
import Navbar from '../components/navbar'
import styles from './hotels.module.css'
const Hotel_list_fw19_0144 = () => {
    const hotels=useSelector(state=>state.AppReducer.hotels_fw19_0144)
    const dispatch=useDispatch()
    console.log(hotels)
 useEffect(()=>{
  dispatch(GetData_fw19_0144()).then((res)=>{
    console.log(res.payload)
  })
 },[])
  
  return (
    <div>
        <Navbar />
        <Box width='5xl' height='filled' margin='auto' >
            <div>
                <Text fontSize='45px' className='.fonts' color='#494949;' marginTop='20' fontWeight='200'>
                Holiday Homes for Sale
                </Text>
            </div>
            <div>
            <Text color='#777676;'>Tripvillas brings you a selection of pre-screened holiday homes with 
                strong income generation potential across key tourism destinations. Check
                 each listing for our own comments on the project and the potential for income and appreciation.</Text>
            </div>
            <br></br>
            <div>
            <Box width='100%' border='1px solid ' px='55.5' py='10.5' 
            fontSize='13px' color='#8a6d3b' backgroundColor='#fcf8e3'
            borderColor='#faebcc' borderRadius='5px'>
            If you are interested in Selling your holiday home or are a builder
             developing holiday homes or a fractional ownership resort, please contact Vinayak Koli on vinayak@tripvillas.com
              to understand how Tripvillas can help in improving your real estate offering and helping you reach 
              out to a larger audience of holiday home investors.
            </Box>
            </div>
            <br></br>
            <div style={{display:'flex',justifyContent:"space-between"}}>
                <div >
                    <Select name="country" >
                             <option value="all">All Countries</option>
                             <option value="bangladesh">Bangladesh</option>
                             <option value="croatia">Croatia</option>
                             <option value="philippines">Philippines</option>
                             <option value="srilanka">Sri Lanka</option>
                             <option value="indonesia">Indonesia</option>
                             <option value="india">India</option>
                    </Select>
                </div>
                <div>
                    <Select name='property' border='1px solid'>
                            <option value='all'>All Property Types</option>
                            <option value='apartment'>Apartment</option>
                            <option value='farm'>Farm</option>
                            <option value='ownership'>Factional Ownership</option>
                            <option value='hotel'>Hotel Room</option>
                            <option value='house'>House</option>
                            <option value='land'>Land</option>
                            <option value='studio'>Studio</option>
                             <option value='timeshare'>Timeshare</option>
                             <option value='villa'>Villa</option>
                    </Select>
                </div>
                <div>
                <Select name="sale" >
                             <option value="all">All Sale Types</option>
                             <option value="primary">Primary (From Builder)</option>
                             <option value="resale">Resale</option>
                    </Select>
                </div>
                <div>
                <Select name="management" >
                             <option value="all">All Management</option>
                             <option value="self">Self Managed</option>
                             <option value="professionally">Professionally Managed</option>
                    </Select>
                </div>
                <div> 
                    <Button>
                        Submit
                    </Button>
                 </div>
            </div>
            <div style={{margin:'auto',border:'1px solid'}} >
            <br></br>
                <Grid templateColumns='repeat(3, 1fr)' gap='145px' >
                    {
                        hotels&&hotels.map((item)=>
                        <div key={item.id}>
                            <div className={styles.foo} style={{border:'1px solid' }} _hover=''>
                            <Img src={item.img}  width='240px'  />
                            </div>
                            <Text fontSize='20px' fontWeight='400'>{item.name}</Text>
                            <Text fontSize='13px'>{item.location}</Text>
                            <Text fontSize='10px'>{item.price}</Text>
                        </div>
                        )
                    }
                </Grid>

            </div>
        </Box>
    </div>
  )
}

export default Hotel_list_fw19_0144