import { Box } from '@chakra-ui/react'
import React from 'react'
import More from '../Subpages/Savea/More'
import Savings from '../Subpages/Savea/Savings'
import Real from '../Subpages/Savea/Real'
import Meet from '../Subpages/Savea/Meet'
import Strach from '../Subpages/Savea/Strach'
import Money from '../Subpages/Home/Money'

const Save = () => {
  return (
   <Box>
     <More/>
     <Savings/>   
    <Real/>
    <Meet/>
    <Strach/>
    <Money/>
   </Box>
  )
}

export default Save
