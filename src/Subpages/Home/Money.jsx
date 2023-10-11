import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { moneyData } from "../../utils/money";

const Money = () => {
    const [money, setMoney] = useState([])

    useEffect(()=>{
        setMoney(moneyData)
    },[])
  return (
   <Box minH={'300px'} w={'100'} borderBottom={'1px'}>
     <Box
      h={"60%"}
      w={"80%"}
      margin={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      boxShadow="2xl" p="1" rounded="md" bg={"#EFF1FF"}
    >

      {money?.map(item => (
        <Flex
        h={"80%"}
        w={"85%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box minH={"60%"} w={"45%"}>
          <Box  w={"80%"} minH={"50px"}>
            <Text fontSize={"33px"} fontWeight={"bold"}         textColor={"#57357F"}
>
              {item.app}
            </Text>
          </Box>
          <Box  w={"90%"} minH={"50px"} mt={'3'}>
            <Text>{item.save}</Text>
          </Box>
          <Box
            mt={'5'}
            h={"10"}
            bg={"#40196D"}
            w={"40%"}
            textAlign={"center"}
            textColor={"white"}
            fontSize={"14"}
            fontWeight={"bold"}
            borderRadius={"9"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text textColor={"white"}>{item.button}</Text>
          </Box>
        </Box>

        <Box
          minH={"100%"}
          w={"45%"}
          justify={"center"}
          alignItems={"center"}
          backgroundImage={item.image}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          display={"flex"}
          margin={"auto"}
        ></Box>
      </Flex>
      ))}

    </Box>
   </Box>
  );
};

export default Money;
