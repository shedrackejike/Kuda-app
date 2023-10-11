import { Box } from '@chakra-ui/react'
import React from 'react'
import More from '../Subpages/Savea/More'
import Savings from '../Subpages/Savea/Savings'
import Real from '../Subpages/Savea/Real'
import Meet from '../Subpages/Savea/Meet'

const Save = () => {
  return (
   <Box>
     <More/>
     <Savings/>   
    <Real/>
    <Meet/>
   </Box>
  )
}

export default Save
