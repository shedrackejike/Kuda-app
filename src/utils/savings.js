import { AiFillCreditCard} from 'react-icons/ai'
import {FaCreativeCommonsZero } from 'react-icons/fa'
import {GiBeard} from "react-icons/gi"
import { Icon } from '@chakra-ui/react'

export const savinsData = [
    {
        id: "1",
        icon:   <Icon as={AiFillCreditCard}/>,
        Comment: "Get up to 15% annual interest on Fixed Savings."
    },
    {
        id: "2",
        icon: <Icon as={GiBeard}/>,
        Comment: "Save every time you spend from your account with Spend+Save."
    },
    {
        id: "3",
        icon:  <Icon as={FaCreativeCommonsZero} />,
        Comment: "Spend nothing on ridiculous bank charges."
    },
]